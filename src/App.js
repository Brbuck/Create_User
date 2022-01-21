import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes'
import AuthProvider from './Context/authContext'
import GlobalStyles from './GlobalStyles'

function App() {
  return (

    <Router>
      <AuthProvider>
        <Routes />
        <GlobalStyles />
      </AuthProvider>
    </Router>

  );
}

export default App;