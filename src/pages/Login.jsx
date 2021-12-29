import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import { withAuth } from '../AuthContext';

const Login = (props) => {
  const authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    props.login(email.value, password.value, props.navFunc, 'map');
  };

  return (
    <>
      <Sidebar />
      <form onSubmit={authenticate}>
        <label htmlFor='email'>Email:</label>
        <input id='email' name='email' type='email' />
        <label htmlFor='password'>Password:</label>
        <input id='password' name='password' type='password' />
        <button>Логин</button>]
        <button
          type='button'
          onClick={() => {
            props.navFunc('registration');
          }}>
          Зарегистрироваться
        </button>
        ]
      </form>
    </>
  );
};

Login.propTypes = {
  loginFunc: PropTypes.func,
  navFunc: PropTypes.func,
};

export const LoginWithAuth = withAuth(Login);
