import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-jpglhta0n2sfdq0v.us.auth0.com";
const clientId = "wkVSPlMMCNZ47Pbc7MshqJp9Claw0RQu";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}>
      <App />
    </Auth0Provider>
  </StrictMode>,
);