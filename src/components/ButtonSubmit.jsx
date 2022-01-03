import React from 'react';
import './ButtonSubmit.css';
import PropTypes from 'prop-types';

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

ButtonSubmit.propTypes = {
  submit: PropTypes.bool,
  onClickFun: PropTypes.func,
  text: PropTypes.string,
};
