import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../helpers/AppContext';
import { Modal } from '../components/Modal';
import { FormHeader } from '../components/FormHeader';
import { ButtonSubmit } from '../components/ButtonSubmit';

const Registration = (props) => {
  const register = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    props.register(email.value, password.value);
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
                  props.navFunc('login');
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

export const RegistrationWithAuth = withContext(Registration);
