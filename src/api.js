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
        return [data.success, null, data.token];
      } else {
        return [data.success, data.error, null];
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
        return [data.success, null, data.token];
      } else {
        return [data.success, data.error, null];
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
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cardName: cardName,
      cvc: cvc,
      token: token,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        return [data.success, null];
      } else {
        return [data.success, data.error];
      }
    });
};
