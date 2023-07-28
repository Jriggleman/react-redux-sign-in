import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user';
import errorReducer from './features/error';
import { GoogleOAuthProvider } from '@react-oauth/google';

const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={'750300339857-3uu8afvt6gfojjapf3rlvph9bkkjt896.apps.googleusercontent.com'}
      >
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
