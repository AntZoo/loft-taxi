export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const REGISTER = 'REGISTER';
export const SAVE_CARD = 'SAVE_CARD';
export const GET_CARD = 'GET_CARD';
export const CARD_DETAILS = 'CARD_DETAILS';

export const login = (token) => ({
  type: LOG_IN,
  payload: token,
});
export const logout = () => ({
  type: LOG_OUT,
});
export const cardDetails = (cardNumber, cardName, cardDate, cardCode) => ({
  type: CARD_DETAILS,
  payload: { cardNumber, cardName, cardDate, cardCode },
});

export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});
export const register = (email, password, name, surname) => ({
  type: REGISTER,
  payload: { email, password, name, surname },
});
export const saveCard = (cardNumber, cardName, cardDate, cardCode) => ({
  type: SAVE_CARD,
  payload: { cardNumber, cardName, cardDate, cardCode },
});
export const getCard = (token) => ({
  type: GET_CARD,
  payload: token,
});
