import React, { useEffect, useState } from 'react';
import API from '../services/api';
import Sidebar from '../components/Sidebar';
import './ProductList.css';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    API.get('/api/products/')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("Not authorized or server error.");
        setLoading(false);
      });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await API.delete(`/api/products/${id}/`);
        setProducts(products.filter(p => p.id !== id));
      } catch (err) {
        alert("Failed to delete product.");
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/edit-product/${id}`);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="product-list-container" style={{ marginLeft: '220px', padding: '20px', flex: 1 }}>
        <h2 className="product-list-title">📦 Product List</h2>

        {loading ? (
          <p className="loading">Loading...</p>
        ) : products.length === 0 ? (
          <p className="no-products">No products available.</p>
        ) : (
          <table className="product-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.quantity}</td>
                  <td>${p.price}</td>
                  <td>{p.category}</td>
                  <td>
                    <button className="btn-update" onClick={() => handleUpdate(p.id)}>✏️ Update</button>
                    <button className="btn-delete" onClick={() => handleDelete(p.id)}>🗑️ Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
