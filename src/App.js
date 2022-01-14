import React from 'react';
import { Map } from './pages/Map';
import { Profile } from './pages/Profile';
import { LoginWithAuth } from './pages/Login';
import { RegistrationWithAuth } from './pages/Registration';
import Header from './components/Header';
import { withContext } from './helpers/AppContext';
import { Sidebar } from './components/Sidebar';

const App = (props) => {
  const navigateTo = (page) => {
    if (props.isLoggedIn || ['login', 'registration'].includes(page)) {
      props.setActivePage(page);
    } else {
      props.setActivePage('login');
    }
  };

  React.useEffect(() => {
    navigateTo('map');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isLoggedIn]);

  return (
    <>
      {props.isLoggedIn && <Header navFunc={navigateTo} />}
      {!props.isLoggedIn && <Sidebar navFunc={navigateTo} />}
      <main>
        <section>
          {props.activePage === 'map' && <Map />}
          {props.activePage === 'profile' && <Profile />}
          {props.activePage === 'login' && (
            <LoginWithAuth navFunc={navigateTo} />
          )}
          {props.activePage === 'registration' && (
            <RegistrationWithAuth navFunc={navigateTo} />
          )}
        </section>
      </main>
    </>
  );
};

export default withContext(App);
