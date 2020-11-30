import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';
import { MenuMobileProvider } from './hooks/menu';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MenuMobileProvider>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </MenuMobileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
