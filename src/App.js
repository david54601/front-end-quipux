  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import LoginPage from './pages/LoginPage';
  import ListaPage from './pages/ListaPage';
  import { isAuthenticated } from './api/authService';
  import { Navigate } from 'react-router-dom';

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/listas"
            element={ isAuthenticated() ? <ListaPage /> : <Navigate to="/login" /> }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }

  export default App;
