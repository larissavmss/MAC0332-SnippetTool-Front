import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Entry from './components/Entry/Entry';
import Main from './pages/Main/Main';
import Tags from './pages/Tags/Tags';
import Folders from './pages/Folders/Folders';
import Folder from './pages/Folder/Folder';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/entry" element={<Entry />} />
        <Route path="/user" element={<Header />} />
        <Route path="/" element={<Main />} />
        <Route path='/tags' element={<Tags />} />
        <Route path='/folders' element={<Folders />} />
        <Route path="/folder/:folderId" element={<Folder />} />
      </Routes>
    </Router>
  );
};

export default App;
