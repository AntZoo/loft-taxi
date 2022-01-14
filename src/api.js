export const serverLogin = async (email, password) => {
  return fetch('https://loft-taxi.glitch.me/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.success) {
        return { success: data.success, error: null, token: data.token };
      } else {
        return { success: data.success, error: data.error, token: null };
      }
    });
};

export const serverRegister = async (email, password, name, surname) => {
  return fetch('https://loft-taxi.glitch.me/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      surname: surname,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.success) {
        return { success: data.success, error: null, token: data.token };
      } else {
        return { success: data.success, error: data.error, token: null };
      }
    });
};

export const serverCardChange = async (
  cardNumber,
  expiryDate,
  cardName,
  cvc,
  token
) => {
  return fetch('https://loft-taxi.glitch.me/card', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cardNumber: cardNumber
        .replaceAll(/ /g, '')
        .replaceAll(/(\d{4})(\d{4})(\d{4})(\d{4})/g, '$1 $2 $3 $4'),
      expiryDate: expiryDate.replaceAll(/\d\d(\d\d)-(\d\d)/g, '$2/$1'),
      cardName: cardName,
      cvc: cvc,
      token: token,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.success) {
        return { success: data.success, error: null };
      } else {
        return { success: data.success, error: data.error };
      }
    });
};

export const serverGetCard = async (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
    method: 'GET',
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.cardNumber && data.cardName && data.expiryDate && data.cvc) {
        return {
          success: 'success',
          cardNumber: data.cardNumber,
          cardName: data.cardName,
          cardDate: data.expiryDate.replaceAll(/(\d\d)\/(\d\d)/g, '20$2-$1'),
          cardCode: data.cvc,
        };
      } else {
        return {
          success: 'failure',
          cardNumber: null,
          cardName: null,
          cardDate: null,
          cardCode: null,
        };
      }
    });
};
