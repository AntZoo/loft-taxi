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
          <Link to='/map'>
            <Logo />
          </Link>
        </div>
        <ul className='nav-list'>
          <li>
            <NavLink activeClassName='active' to='/map'>
              <button>Карта</button>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/profile'>
              <button>Профиль</button>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/login'>
              <button
                onClick={() => {
                  props.setIsLoggedIn(false);
                }}>
                Выйти
              </button>
            </NavLink>
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
