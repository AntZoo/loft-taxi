import React from 'react'
import './App.css'
import { Map } from './pages/Map'
import { Profile } from './pages/Profile'
import { Login } from './pages/Login'
import { Registration } from './pages/Registration'
import { Header } from './components/Header'

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

  render() {
    return (
      <>
      <Header authenticated={this.state.authenticated} navFunc={this.navigateTo} logoutFunc={this.logout} />
        <main>
          <section>
            {this.state.currentPage === 'map' && <Map />}  
            {this.state.currentPage === 'profile' && <Profile />}  
            {this.state.currentPage === 'login' && <Login loginFunc={this.login} navFunc={this.navigateTo} />}  
            {this.state.currentPage === 'registration' && <Registration loginFunc={this.login} navFunc={this.navigateTo} />}  
          </section>
        </main>
      </>
    )
  }
}

export default App
