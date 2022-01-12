import { cardDetails } from './actions';
import { serverCardChange, serverGetCard } from './api';
import { SAVE_CARD, GET_CARD } from './actions';

export const cardMiddleware = (store) => (next) => async (action) => {
  if (action.type === SAVE_CARD) {
    const { cardNumber, cardName, cardDate, cardCode } = action.payload;
    const [success, error] = await serverCardChange(
      cardNumber,
      cardDate,
      cardName,
      cardCode,
      store.getState().auth.token
    );
    if (success) {
      alert('Сохранено.');
    } else {
      alert(error);
    }
  } else if (action.type === GET_CARD) {
    const { success, cardNumber, cardName, cardDate, cardCode } =
      await serverGetCard(action.payload);
    if (success) {
      store.dispatch(cardDetails(cardNumber, cardName, cardDate, cardCode));
    } else {
      console.log('Could not get card details.');
    }
  } else {
    next(action);
  }
};
