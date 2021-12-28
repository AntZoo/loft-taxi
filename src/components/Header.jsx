import React from 'react'

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          {props.authenticated && (
            <li>
              <button
                onClick={() => {
                  props.navFunc('map')
                }}>
                Карта
              </button>
            </li>
          )}
          {props.authenticated && (
            <li>
              <button
                onClick={() => {
                  props.navFunc('profile')
                }}>
                Профиль
              </button>
            </li>
          )}
          {props.authenticated && (
            <li>
              <button
                onClick={() => {
                  props.logoutFunc()
                  props.navFunc('login')
                }}>
                Выйти
              </button>
            </li>
          )}
          {!props.authenticated && (
            <li>
              <button
                onClick={() => {
                  props.navFunc('login')
                }}>
                Логин
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header;