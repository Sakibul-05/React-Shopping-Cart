
import React from 'react';
import { HashRouter , Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import NotFound from './components/NotFoundPage';

function App() {
  return (
    <HashRouter>
      <NavBar />  
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/cart"  element={<CartPage/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </HashRouter>
    
  );
}

export default App;

