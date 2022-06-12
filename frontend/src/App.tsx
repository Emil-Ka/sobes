import React, {FC} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {Home, Tests, Test} from './pages';

import './scss/index.scss';

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='tests/:id' element={<Test/>}/>
        <Route path='tests/' element={<Tests/>}/>
      </Routes>
    </Router>
  )
};