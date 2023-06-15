import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Closet from './Closet';
import './App.css';
import './assets/scss/style.scss';

function App() {
  return (
    <>
      <HashRouter>
        <Closet/>
        <Routes>
          <Route path='/' element= {Closet}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
