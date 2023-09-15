import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from './store/index'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback='loading...'>
        <App />
        <Toaster
          toastOptions={{
            position: 'top-right',
            style: {
              background: '#283046',
              color: 'white'
            }
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
