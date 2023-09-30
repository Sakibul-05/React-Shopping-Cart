// App.js
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import NotFound from './components/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar /> {/* Include the navigation bar */}
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/cart"  element={<CartPage/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

