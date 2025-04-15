import React, { useEffect, useState, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import API from '../services/api';
import { DarkModeContext } from '../context/DarkModeContext';
import './Dashboard.css';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const { darkMode, setDarkMode } = useContext(DarkModeContext); // ← Context

  useEffect(() => {
    API.get('/api/products/')
      .then(res => setProducts(res.data))
      .catch(() => alert('Failed to load products'));
  }, []);

  const totalProducts = products.length;
  const totalValue = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const uniqueCategories = [...new Set(products.map(p => p.category))].length;

  const barChartData = {
    labels: products.map(p => p.name),
    datasets: [
      {
        label: 'Quantity',
        data: products.map(p => p.quantity),
        backgroundColor: '#4CAF50',
        borderRadius: 5,
      }
    ]
  };

  const categoryCounts = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        label: 'Category Count',
        data: Object.values(categoryCounts),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#FF9800', '#9C27B0'],
        borderWidth: 1,
      }
    ]
  };

  const categoryValues = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + (p.price * p.quantity);
    return acc;
  }, {});

  const doughnutChartData = {
    labels: Object.keys(categoryValues),
    datasets: [
      {
        label: 'Value by Category',
        data: Object.values(categoryValues),
        backgroundColor: ['#03A9F4', '#FF9800', '#E91E63', '#8BC34A', '#9C27B0'],
        borderWidth: 1,
      }
    ]
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <Sidebar />
      <div className="dashboard-content">
        <div className="dashboard-main">
          <div className="top-bar">
            <h2>📊 Dashboard Overview</h2>
            <button className="toggle-dark" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>

          <div className="summary-cards">
            <div className="card">
              <h3>🛒 Total Products</h3>
              <p>{totalProducts}</p>
            </div>
            <div className="card">
              <h3>💰 Total Value</h3>
              <p>${Number(totalValue).toFixed(2)}</p>
            </div>
            <div className="card">
              <h3>📂 Categories</h3>
              <p>{uniqueCategories}</p>
            </div>
          </div>

          <div className="charts-section">
            <div className="chart-card"><Bar data={barChartData} /></div>
            <div className="chart-card"><Pie data={pieChartData} /></div>
            <div className="chart-card"><Doughnut data={doughnutChartData} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
