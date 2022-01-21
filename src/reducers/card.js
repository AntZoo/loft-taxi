import { CARD_DETAILS } from '../actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case CARD_DETAILS: {
      return {
        cardNumber: action.payload.cardNumber,
        cardName: action.payload.cardName,
        cardDate: action.payload.cardDate,
        cardCode: action.payload.cardCode,
      };
    }
    default:
      return state;
  }
};
