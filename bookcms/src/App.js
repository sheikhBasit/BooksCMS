// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Categories } from './components/Category';
import { Books } from './components/Books';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
    
    </Router>
  );
}

export default App;
