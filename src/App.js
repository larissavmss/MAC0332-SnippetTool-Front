import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './pages/Main/Main'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<Header />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
