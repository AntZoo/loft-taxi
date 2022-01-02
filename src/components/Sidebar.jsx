import React from 'react';
import './Sidebar.css';
import { Logo } from 'loft-taxi-mui-theme';

export const Sidebar = (props) => {
  return (
    <div className='sidebar-wrap'>
      <div className='sidebar'>
        <div
          className='sidebar-logo'
          onClick={() => {
            props.navFunc('login');
          }}>
          <Logo />
        </div>
      </div>
      <div className='sidebar-background'></div>
    </div>
  );
};
