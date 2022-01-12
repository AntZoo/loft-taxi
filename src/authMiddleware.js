import { login, getCard } from './actions';
import { serverLogin, serverRegister } from './api';
import { AUTHENTICATE, REGISTER } from './actions';

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const [success, error, token] = await serverLogin(email, password);
    if (success) {
      store.dispatch(login(token));
      store.dispatch(getCard(token));
    } else {
      alert(error);
    }
  } else if (action.type === REGISTER) {
    const { email, password, name, surname } = action.payload;
    const [success, error, token] = await serverRegister(
      email,
      password,
      name,
      surname
    );
    if (success) {
      store.dispatch(login(token));
    } else {
      alert(error);
    }
  } else {
    next(action);
  }
};
