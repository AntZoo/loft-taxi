import React from 'react';
import './Modal.css';

export const Modal = (props) => {
  const cls = 'modal-window ' + props.height;
  return <div className={cls}>{props.children}</div>;
};
