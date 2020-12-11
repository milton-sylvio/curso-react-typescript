import React, { useContext } from 'react';

import App from './app.routes';
import Auth from './auth.routes';

import { AuthContext } from '../hooks/auth';

import { BrowserRouter } from 'react-router-dom';

import Loading from '../components/UI/Loading';

const Routes: React.FC = () => { 
  const { loadingAuthState, authenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {
        loadingAuthState ? <Loading /> : 
          authenticated ? <App /> : <Auth /> 
      }
    </BrowserRouter>
  );
};

export default Routes;
