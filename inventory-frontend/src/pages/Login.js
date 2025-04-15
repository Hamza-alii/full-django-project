// Login.js

import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [data, setData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await API.post('/auth/token/login/', data);
      localStorage.setItem('token', res.data.auth_token);
      navigate('/dashboard'); // ✅ go to dashboard after login
    } catch (err) {
      setError("Invalid username or password.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={e => setData({ ...data, username: e.target.value })}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setData({ ...data, password: e.target.value })}
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>

        <div style={styles.footer}>
          <Link to="/forgot-password" style={styles.link}>Forgot Password?</Link>
          <p style={{ marginTop: '10px' }}>
            Don't have an account? <Link to="/signup" style={styles.link}>Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

// styles (as-is)
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f5f7fa',
  },
  form: {
    padding: '40px',
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    background: '#4CAF50',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
    textAlign: 'center',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  }
};
