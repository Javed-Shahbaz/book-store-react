import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Books from './components/Book';
import Catagories from './components/Category';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="catagory" element={<Catagories />} />
      </Routes>

    </div>

  );
}

export default App;
