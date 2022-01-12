import React from 'react';
import './ButtonSubmit.css';
import PropTypes from 'prop-types';

export const ButtonSubmit = (props) => {
  const cls =
    'button-submit ' + (props.small ? 'button-small ' : 'button-large ');
  return (
    <button
      className={cls}
      type={props.submit ? 'submit' : 'button'}
      form={props.form}
      onClick={props.onClickFun}>
      {props.text}
    </button>
  );
};

ButtonSubmit.propTypes = {
  submit: PropTypes.bool,
  onClickFun: PropTypes.func,
  text: PropTypes.string,
  small: PropTypes.bool,
};
