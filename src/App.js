import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import User from './components/User/User';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
