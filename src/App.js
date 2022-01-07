import React from 'react';
import { Map } from './pages/Map';
import { Profile } from './pages/Profile';
import { LoginWithAuth } from './pages/Login';
import { RegistrationWithAuth } from './pages/Registration';
import Header from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './actions';

const App = (props) => {
  const navigateTo = (page) => {
    if (props.isLoggedIn || ['login', 'registration'].includes(page)) {
      const path = `/${page}`;
      <Redirect to={path} />;
    } else {
      <Redirect to='/login' />;
    }
  };

  React.useEffect(() => {
    navigateTo('map');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isLoggedIn]);

  return (
    <>
      {props.isLoggedIn && <Header />}
      {!props.isLoggedIn && <Sidebar />}
      <main>
        <section>
          <Switch>
            <Route
              exact
              path='/'
              component={props.isLoggedIn ? Map : LoginWithAuth}
            />
            <Route
              path='/map'
              component={props.isLoggedIn ? Map : LoginWithAuth}
            />
            <Route
              path='/profile'
              component={props.isLoggedIn ? Profile : LoginWithAuth}
            />
            <Route
              path='/login'
              component={props.isLoggedIn ? Map : LoginWithAuth}
            />
            <Route
              path='/registration'
              component={props.isLoggedIn ? Map : RegistrationWithAuth}
            />
            <Redirect from='*' to={props.isLoggedIn ? '/map' : '/login'} />
          </Switch>
        </section>
      </main>
    </>
  );
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }), {
  login,
})(App);
