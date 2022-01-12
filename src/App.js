import React from 'react';
import { PrivateRoute } from './components/PrivateRoute';
import { Map } from './pages/Map';
import { ProfileWithAuth } from './pages/Profile';
import { LoginWithAuth } from './pages/Login';
import { RegistrationWithAuth } from './pages/Registration';
import Header from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './actions';
import './App.css';

const App = (props) => {
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
            <PrivateRoute path='/map' component={Map} />
            <PrivateRoute path='/profile' component={ProfileWithAuth} />
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
