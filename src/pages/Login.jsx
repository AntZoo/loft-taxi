import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../helpers/AppContext';
import { Modal } from '../components/Modal';
import { FormHeader } from '../components/FormHeader';
import './LoginRegisterForm.css';
import { ButtonSubmit } from '../components/ButtonSubmit';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    if (props.login(email.value, password.value)) {
      props.history.push('/map');
    }
  };

  return (
    <Modal height='height-480'>
      <FormHeader text='Войти' />
      <form onSubmit={authenticate}>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='mail@mail.ru'
        />
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          name='password'
          type='password'
          placeholder='********'
        />
        <div className='under-form'>
          <ButtonSubmit text='Войти' submit />
          <div className='under-button'>
            <span>
              Новый пользователь?
              <Link to='/registration'>
                <button className='button-link' type='button'>
                  Регистрация
                </button>
              </Link>
            </span>
          </div>
        </div>
      </form>
    </Modal>
  );
};

Login.propTypes = {
  loginFunc: PropTypes.func,
  navFunc: PropTypes.func,
};

export const LoginWithAuth = withContext(Login);
