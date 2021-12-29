import React, { useState } from 'react';
import './App.css';
import { Map } from './pages/Map';
import { Profile } from './pages/Profile';
import { LoginWithAuth } from './pages/Login';
import { RegistrationWithAuth } from './pages/Registration';
import Header from './components/Header';
import { withAuth } from './AuthContext';

const App = (props) => {
  const [currentPage, setCurrentPage] = useState('login');

  const navigateTo = (page) => {
    if (props.isLoggedIn || ['login', 'registration'].includes(page)) {
      setCurrentPage(page);
    } else {
      setCurrentPage('login');
    }
  };

  React.useEffect(() => {
    navigateTo('map');
  }, [props.isLoggedIn]);

  return (
    <>
      <Header navFunc={navigateTo} />
      <main>
        <section>
          {currentPage === 'map' && <Map />}
          {currentPage === 'profile' && <Profile />}
          {currentPage === 'login' && <LoginWithAuth navFunc={navigateTo} />}
          {currentPage === 'registration' && (
            <RegistrationWithAuth navFunc={navigateTo} />
          )}
        </section>
      </main>
    </>
  );
};

export default withAuth(App);
