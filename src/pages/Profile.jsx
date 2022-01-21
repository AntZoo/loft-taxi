import React from 'react';
import { Modal } from '../components/Modal';
import { ButtonSubmit } from '../components/ButtonSubmit';
import './Profile.css';
import { MCIcon } from 'loft-taxi-mui-theme';
import { InputBox } from '../components/InputBox';
import { connect } from 'react-redux';
import { saveCard } from '../actions';

export const Profile = (props) => {
  const saveCard = (event) => {
    event.preventDefault();
    const { cardNumber, cardName, cardDate, cardCvv } = event.target;
    props.saveCard(
      cardNumber.value,
      cardName.value,
      cardDate.value,
      cardCvv.value,
      props.token
    );
  };

  return (
    <>
      <div className='profile-background'></div>
      <Modal height='height-480'>
        <div className='profile-header'>
          <h1>Профиль</h1>
          <h3>Способ оплаты</h3>
        </div>
        <div className='profile-cards'>
          <div className='profile-card'>
            <MCIcon />
            <form id='card-form' onSubmit={saveCard}>
              <InputBox
                Id='cardNumber'
                Type='text'
                Placeholder='1234 5678 8765 4321'
                Value={props.cardNumber}
              />
              <InputBox
                Id='cardName'
                Type='text'
                Placeholder='Vasilii Pupkin'
                Value={props.cardName}
              />
              <div className='profile-card-details'>
                <InputBox Id='cardDate' Type='month' Value={props.cardDate} />
                <InputBox
                  Id='cardCvv'
                  Type='text'
                  Placeholder='CVV'
                  Value={props.cardCode}
                />
              </div>
            </form>
          </div>
        </div>
        <div className='profile-button'>
          <ButtonSubmit small submit text='Сохранить' form='card-form' />
        </div>
      </Modal>
    </>
  );
};

export const ProfileWithAuth = connect(
  (state) => ({
    cardNumber: state.card.cardNumber,
    cardName: state.card.cardName,
    cardDate: state.card.cardDate,
    cardCode: state.card.cardCode,
    token: state.auth.token,
  }),
  {
    saveCard,
  }
)(Profile);
