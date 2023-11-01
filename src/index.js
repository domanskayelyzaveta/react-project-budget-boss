import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="965684705902-b4sj4a72vjng409d9dcp0s5k4knmhdde.apps.googleusercontent.com">
        <BrowserRouter basename="/react-project-budget-boss">
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
