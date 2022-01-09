import React from 'react';
import { Modal } from '../components/Modal';

export const Profile = () => {
  return (
    <>
      <div className='profile-background'></div>
      <Modal height='height-480'>
        <h1>Профиль</h1>
        <h3>Способ оплаты</h3>
      </Modal>
    </>
  );
};
