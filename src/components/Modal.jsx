import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

export const Modal = (props) => {
  const cls = 'modal-window ' + props.height;
  return <div className={cls}>{props.children}</div>;
};

Modal.propTypes = {
  height: PropTypes.string,
};
