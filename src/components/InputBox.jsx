import React from 'react';

export const InputBox = (props) => {
  return (
    <>
      <label htmlFor={props.Id}>{props.LabelName}:</label>
      <input
        id={props.Id}
        name={props.Id}
        type={props.Type}
        placeholder={props.Placeholder}
      />
    </>
  );
};
