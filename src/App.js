import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Book from './components/Book';
import Categories from './components/catagory';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Book />} />
        <Route exact path="categories" element={<Categories />} />
      </Routes>

    </div>

  );
}

export default App;
