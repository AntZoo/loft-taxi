import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

jest.mock('../pages/Map', () => ({ Map: () => <div>Map content</div> }));
jest.mock('../pages/Profile', () => ({
  ProfileWithAuth: () => <div>Profile content</div>,
}));
jest.mock('../pages/Login', () => ({
  LoginWithAuth: () => <div>Login content</div>,
}));
jest.mock('../pages/Registration', () => ({
  RegistrationWithAuth: () => <div>Registration content</div>,
}));

describe('App', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
  });
});
