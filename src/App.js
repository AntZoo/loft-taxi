import React from 'react'
import './App.css'
import { Map } from './Map'
import { Profile } from './Profile'
import { Login } from './Login'
import { Registration } from './Registration'

class App extends React.Component {
  state = { currentPage: 'login', authenticated: false }

  navigateTo = (page) => {
    this.setState({ currentPage: page })
  }

  login = () => {
    this.setState({ authenticated: true })
  }

  logout = () => {
    this.setState({ authenticated: false })
  }

  PAGES = {
    map: <Map loginFunc={this.login} navFunc={this.navigateTo} />,
    profile: <Profile loginFunc={this.login} navFunc={this.navigateTo} />,
    login: <Login loginFunc={this.login} navFunc={this.navigateTo} />,
    registration: <Registration loginFunc={this.login} navFunc={this.navigateTo} />,
  }

  render() {
    const renderNavMenu = () => {
      if (this.state.authenticated) {
        return (
          <ul>
            <li>
              <button
                onClick={() => {
                  this.navigateTo('map')
                }}>
                Карта
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.navigateTo('profile')
                }}>
                Профиль
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.logout()
                  this.navigateTo('login')
                }}>
                Выйти
              </button>
            </li>
          </ul>
        )
      } else {
        return (
          <ul>
            <li>
              <button
                onClick={() => {
                  this.navigateTo('login')
                }}>
                Логин
              </button>
            </li>
          </ul>
        )
      }
    }

    return (
      <>
        <header>
          <nav>{renderNavMenu()}}</nav>
        </header>
        <main>
          <section>{this.PAGES[this.state.currentPage]}</section>
        </main>
      </>
    )
  }
}

export default App
