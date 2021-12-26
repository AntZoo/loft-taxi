import React from 'react'

export const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          {props.authenticated && (
            <li>
              <button
                onClick={() => {
                  props.navigateTo('map')
                }}>
                Карта
              </button>
            </li>
          )}
          {props.authenticated && (
            <li>
              <button
                onClick={() => {
                  props.navigateTo('profile')
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
                  props.navigateTo('login')
                }}>
                Выйти
              </button>
            </li>
          )}
          {!props.authenticated && (
            <li>
              <button
                onClick={() => {
                  props.navigateTo('login')
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
