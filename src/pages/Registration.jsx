import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../components/Modal';
import { FormHeader } from '../components/FormHeader';
import { ButtonSubmit } from '../components/ButtonSubmit';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions';
import { InputBox } from '../components/InputBox';

const Registration = (props) => {
  const register = (event) => {
    event.preventDefault();
    const { email, password, name, surname } = event.target;
    props.register(email.value, password.value, name.value, surname.value);
  };

  return (
    <Modal absolute height='height-620'>
      <FormHeader text='Регистрация' />
      <form onSubmit={register}>
        <InputBox
          Id='email'
          Type='email'
          Placeholder='mail@mail.ru'
          LabelName='Email*'
        />
        <InputBox Id='name' Type='text' Placeholder='Пётр' LabelName='Имя*' />
        <InputBox
          Id='surname'
          Type='text'
          Placeholder='Александрович'
          LabelName='Фамилия*'
        />
        <InputBox
          Id='password'
          Type='password'
          Placeholder='********'
          LabelName='Придумайте пароль*'
        />
        <div className='under-form'>
          <ButtonSubmit text='Зарегистрироваться' submit />
          <div className='under-button'>
            <span>
              Уже зарегистрированы?
              <Link to='/login'>
                <button className='button-link' type='button'>
                  Войти
                </button>
              </Link>
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

export const RegistrationWithAuth = connect(null, { register })(Registration);
