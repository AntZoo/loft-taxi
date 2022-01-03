import React from 'react';
import { withContext } from '../helpers/AppContext';
import { Logo } from 'loft-taxi-mui-theme';
import './Header.css';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className='main-nav'>
      <nav>
        <div className='nav-logo'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <ul className='nav-list'>
          <li>
            <NavLink activeClassName='active' to='/map'>
              Карта
            </NavLink>
            {/* <button
                className={
                  props.activePage === 'map'
                    ? 'nav-button active'
                    : 'nav-button'
                }
                onClick={() => {
                  props.navFunc('map');
                }}>
                Карта
              </button> */}
          </li>
          <li>
            <NavLink activeClassName='active' to='/profile'>
              Профиль
            </NavLink>
            {/* <button
                className={
                  props.activePage === 'profile'
                    ? 'nav-button active'
                    : 'nav-button'
                }
                onClick={() => {
                  props.navFunc('profile');
                }}>
                Профиль
              </button> */}
          </li>
          <li>
            <NavLink activeClassName='active' to='/login'>
              Выйти
            </NavLink>
            {/* <button
                className='nav-button'
                onClick={() => {
                  props.logout();
                  props.navFunc('login');
                }}>
                Выйти
              </button> */}
          </li>
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
