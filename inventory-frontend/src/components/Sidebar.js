// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Inventory</h2>
      <ul className="sidebar-nav">
        <li><Link to="/dashboard">🏠 Dashboard</Link></li>
        <li><Link to="/products">📦 Products</Link></li>
        <li><Link to="/add-product">➕ Add Product</Link></li>
        <li><Link to="/">🚪 Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
