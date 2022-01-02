import React from 'react';
import './ButtonSubmit.css';

export const ButtonSubmit = (props) => {
  return (
    <button
      className='button-submit'
      type={props.submit ? 'submit' : 'button'}
      onClick={props.onClickFun}>
      {props.text}
    </button>
  );
};
