import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../components/Modal';
import { FormHeader } from '../components/FormHeader';
import { ButtonSubmit } from '../components/ButtonSubmit';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions';

const Registration = (props) => {
  const register = (event) => {
    event.preventDefault();
    props.login();
  };

  return (
    <Modal height='height-600'>
      <FormHeader text='Регистрация' />
      <form onSubmit={register}>
        <label htmlFor='email'>Email*:</label>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='mail@mail.ru'
        />
        <label htmlFor='name'>Как вас зовут?*</label>
        <input
          id='name'
          name='name'
          type='text'
          placeholder='Пётр Александрович'
        />
        <label htmlFor='password'>Придумайте пароль*:</label>
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
              Уже зарегистрированы?
              <button
                className='button-link'
                type='button'
                onClick={() => {
                  <Redirect to='/login' />;
                }}>
                Войти
              </button>
            </span>
          </div>
        </div>
      </form>
    </Modal>
  );
};

Registration.propTypes = {
  register: PropTypes.func,
  navFunc: PropTypes.func,
};

export const RegistrationWithAuth = connect(null, { login })(Registration);
