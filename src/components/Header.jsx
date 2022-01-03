import React from 'react';
import { withContext } from '../helpers/AppContext';
import { Logo } from 'loft-taxi-mui-theme';
import './Header.css';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header className='main-nav'>
      <nav>
        <div className='nav-logo'>
          <Logo />
        </div>
        <ul className='nav-list'>
          {props.isLoggedIn && (
            <li>
              <button
                className={
                  props.activePage === 'map'
                    ? 'nav-button active'
                    : 'nav-button'
                }
                onClick={() => {
                  props.navFunc('map');
                }}>
                Карта
              </button>
            </li>
          )}
          {props.isLoggedIn && (
            <li>
              <button
                className={
                  props.activePage === 'profile'
                    ? 'nav-button active'
                    : 'nav-button'
                }
                onClick={() => {
                  props.navFunc('profile');
                }}>
                Профиль
              </button>
            </li>
          )}
          {props.isLoggedIn && (
            <li>
              <button
                className='nav-button'
                onClick={() => {
                  props.logout();
                  props.navFunc('login');
                }}>
                Выйти
              </button>
            </li>
          )}
          {!props.isLoggedIn && (
            <li>
              <button
                className={
                  props.activePage === 'login'
                    ? 'nav-button active'
                    : 'nav-button'
                }
                onClick={() => {
                  props.navFunc('login');
                }}>
                Логин
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default withContext(Header);

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  activePage: PropTypes.string,
  navFunc: PropTypes.func,
  logout: PropTypes.func,
};
