import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Login from './components/Entry/Entry';
import Main from './pages/Main/Main'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/entry" element={<Entry />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Header />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
