import React from 'react';
import { withAuth } from '../AuthContext';

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          {props.isLoggedIn && (
            <li>
              <button
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

export default withAuth(Header);
