import React from 'react';
import { Modal } from '../components/Modal';
import { FormHeader } from '../components/FormHeader';
import './LoginRegisterForm.css';
import { ButtonSubmit } from '../components/ButtonSubmit';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticate } from '../actions';
import { InputBox } from '../components/InputBox';

const Login = (props) => {
  const authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    props.authenticate(email.value, password.value);
  };

  return (
    <Modal absolute height='height-480'>
      <FormHeader text='Войти' />
      <form onSubmit={authenticate}>
        <InputBox
          Id='email'
          Type='email'
          Placeholder='mail@mail.ru'
          LabelName='Email*'
        />
        <InputBox
          Id='password'
          Type='password'
          Placeholder='********'
          LabelName='Password*'
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

export const LoginWithAuth = connect(null, {
  authenticate,
})(Login);
