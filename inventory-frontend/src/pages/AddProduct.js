import React, { useState } from 'react';
import API from '../services/api';
import Sidebar from '../components/Sidebar'; // Import sidebar
import './AddProduct.css'; // Import AddProduct styling

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: '',
    category: ''
  });

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await API.post('/api/products/', product);
      alert("✅ Product Added!");
    } catch (err) {
      alert("❌ Add Failed");
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="form-container" style={{ marginLeft: '220px', flex: 1 }}>
        <h2>Add New Product</h2>
        <form onSubmit={handleAdd} className="product-form">
          <input
            placeholder="Name"
            required
            onChange={e => setProduct({ ...product, name: e.target.value })}
          />
          <input
            placeholder="Quantity"
            type="number"
            required
            onChange={e => setProduct({ ...product, quantity: e.target.value })}
          />
          <input
            placeholder="Price"
            type="number"
            required
            onChange={e => setProduct({ ...product, price: e.target.value })}
          />
          <input
            placeholder="Category"
            required
            onChange={e => setProduct({ ...product, category: e.target.value })}
          />
          <button type="submit">➕ Add Product</button>
        </form>
      </div>
    </div>
  );
}
