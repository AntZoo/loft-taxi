import React from 'react';
import PropTypes from 'prop-types';
import { withAuth } from '../AuthContext';

const Registration = (props) => {
  const register = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    props.register(email.value, password.value, props.navFunc, 'map');
  };

  return (
    <>
      <form onSubmit={register}>
        <label htmlFor='email'>Email:</label>
        <input id='email' name='email' type='email' />
        <label htmlFor='password'>Password:</label>
        <input id='password' name='password' type='password' />
        <button>Зарегистрироваться</button>]
      </form>
    </>
  );
};

Registration.propTypes = {
  loginFunc: PropTypes.func,
  navFunc: PropTypes.func,
};

export const RegistrationWithAuth = withAuth(Registration);
