import React from 'react';
import './FormHeader.css';
import PropTypes from 'prop-types';

export const FormHeader = (props) => {
  return <h1 className='formheader-text'>{props.text}</h1>;
};

FormHeader.propTypes = {
  text: PropTypes.string,
};
