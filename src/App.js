import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Entry from './components/Entry/Entry';
import Main from './pages/Main/Main';
import Tags from './pages/Tags/Tags';
import Folders from './pages/Folders/Folders';
import Folder from './pages/Folder/Folder';
import Tag from './pages/Tag/Tag';
import { useSelector } from 'react-redux';
import { selectUser } from './features/auth/userSlice';


const App = () => {
  const user = useSelector(selectUser);
  const userIsLogged = user.isAuthenticated;

  return (
    <Router>
      <Routes>
        <Route path="/entry" element={<Entry />} />
        <Route path="/" element={ userIsLogged? <Main /> : <Entry/> } />
        <Route path='/tags' element={ userIsLogged? <Tags /> : <Entry/> } />
        <Route path='/tag/:tagId' element={ userIsLogged? <Tag /> : <Entry/> } />
        <Route path='/folders' element={ userIsLogged? <Folders /> : <Entry/> } />
        <Route path="/folder/:folderId" element={ userIsLogged? <Folder /> : <Entry/> } />
      </Routes>
    </Router>
  );
};

export default App;
