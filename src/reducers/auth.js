import { LOG_IN, LOG_OUT, REGISTER } from '../actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case LOG_IN: {
      return { isLoggedIn: true, token: action.payload };
    }
    case LOG_OUT: {
      return { isLoggedIn: false, token: '' };
    }
    case REGISTER: {
      return { isLoggedIn: true, token: action.payload };
    }
    default:
      return state;
  }
};
