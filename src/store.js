import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { authMiddleware } from './authMiddleware';
import { cardMiddleware } from './cardMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(authMiddleware, cardMiddleware))
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
