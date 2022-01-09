import { LOG_IN, LOG_OUT } from '../actions';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn')
    ? localStorage.getItem('isLoggedIn')
    : false,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return { isLoggedIn: true, token: action.payload };
    }
    case LOG_OUT: {
      localStorage.setItem('isLoggedIn', false);
      localStorage.setItem('token', '');
      return { isLoggedIn: false, token: '' };
    }
    default:
      return state;
  }
}
