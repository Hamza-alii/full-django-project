import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DarkModeProvider } from './context/DarkModeContext'; // ✅ Ku dar DarkModeContext

import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import Dashboard from './pages/Dashboard';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
