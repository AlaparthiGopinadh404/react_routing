import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';


function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="des/:id" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;