import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './AddProduct.css';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: '',
    category: ''
  });

  useEffect(() => {
    API.get(`/api/products/${id}/`)
      .then(res => setProduct(res.data))
      .catch(() => alert('Failed to fetch product details.'));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/api/products/${id}/`, product);
      alert("✅ Product updated!");
      navigate('/products');
    } catch {
      alert("❌ Update failed.");
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="form-container" style={{ marginLeft: '220px', flex: 1 }}>
        <h2>Edit Product</h2>
        <form onSubmit={handleUpdate} className="product-form">
          <input value={product.name} onChange={e => setProduct({ ...product, name: e.target.value })} required />
          <input type="number" value={product.quantity} onChange={e => setProduct({ ...product, quantity: e.target.value })} required />
          <input type="number" value={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} required />
          <input value={product.category} onChange={e => setProduct({ ...product, category: e.target.value })} required />
          <button type="submit">💾 Save Changes</button>
        </form>
      </div>
    </div>
  );
}
