import React from 'react';
import './Sidebar.css';
import { Logo } from 'loft-taxi-mui-theme';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Sidebar = (props) => {
  return (
    <div className='sidebar-wrap'>
      <div className='sidebar'>
        {/* <div
          className='sidebar-logo'
          onClick={() => {
            props.navFunc('login');
          }}> */}
        <Link to='/login'>
          <Logo />
        </Link>
        {/* </div> */}
      </div>
      <div className='sidebar-background'></div>
    </div>
  );
};

Sidebar.propTypes = {
  navFunc: PropTypes.func,
};
