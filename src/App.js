import React, {useState} from 'react'
import './App.css'
import { Map } from './pages/Map'
import { Profile } from './pages/Profile'
import { Login } from './pages/Login'
import { Registration } from './pages/Registration'
import Header from './components/Header'

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [authenticated, setAuthenticated] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  const login = () => {
    setAuthenticated(true)
  }

  const logout = () => {
    setAuthenticated(false)
  }

  return (
    <>
    <Header authenticated={authenticated} navFunc={navigateTo} logoutFunc={logout} />
      <main>
        <section>
          {currentPage === 'map' && <Map />}  
          {currentPage === 'profile' && <Profile />}  
          {currentPage === 'login' && <Login loginFunc={login} navFunc={navigateTo} />}  
          {currentPage === 'registration' && <Registration loginFunc={login} navFunc={navigateTo} />}  
        </section>
      </main>
    </>
  )
}

export default App
