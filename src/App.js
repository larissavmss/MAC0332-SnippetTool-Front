import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Main from './pages/Main/Main';
import Tags from './pages/Tags/Tags';
import Folders from './pages/Folders/Folders';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Header />} />
        <Route path="/" element={<Main />} />
        <Route path='/tags' element={<Tags />} />
        <Route path='/folders' element={<Folders />} />
      </Routes>
    </Router>
  );
};

export default App;
