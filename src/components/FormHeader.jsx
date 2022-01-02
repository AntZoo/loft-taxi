import React from 'react';
import './FormHeader.css';

export const FormHeader = (props) => {
  return <h1 className='formheader-text'>{props.text}</h1>;
};
