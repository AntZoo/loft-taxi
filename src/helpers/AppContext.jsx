import React from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [activePage, setActivePage] = React.useState('login');

  const login = (email, password) => {
    if (email !== 'valid@email.com' || password === '') {
      return false;
    }
    setIsLoggedIn(true);

    return true;
  };

  const register = (email, password) => {
    setIsLoggedIn(true);

    return true;
  };

  const value = {
    login,
    setIsLoggedIn,
    register,
    isLoggedIn,
    activePage,
    setActivePage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const withContext = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AppContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </AppContext.Consumer>
      );
    }
  };
};
