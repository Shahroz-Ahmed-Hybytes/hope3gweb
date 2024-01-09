import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CartProvider } from 'react-use-cart';

import App from './App';
// import Auth0ProviderWithHistory from './Auth/auth0-provider-with-history';
import Context from './Context/Context';

ReactDOM.render(
  // <Auth0ProviderWithHistory>
    <CartProvider>
      <App />
    </CartProvider>
  // </Auth0ProviderWithHistory>
  ,
  document.getElementById('root')
);
