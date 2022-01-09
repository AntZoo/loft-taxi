import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

export const Modal = (props) => {
  const cls =
    (props.absolute ? 'modal-window-abs ' : 'modal-window-noabs') +
    props.height;
  return <div className={cls}>{props.children}</div>;
};

Modal.propTypes = {
  height: PropTypes.string,
};
