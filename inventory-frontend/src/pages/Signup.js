import React, { useState } from 'react';
import API from '../services/api';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await API.post('/auth/users/', data);
      setMessage('Signup successful! Redirecting to login...');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError('Signup failed. Please check your details and try again.');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSignup} style={styles.form}>
        <h2 style={styles.title}>Create Account</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={e => setData({ ...data, username: e.target.value })}
          style={styles.input}
          required
        />

        <input
          type="email"
          placeholder="Email"
          onChange={e => setData({ ...data, email: e.target.value })}
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setData({ ...data, password: e.target.value })}
          style={styles.input}
          required
        />

        {message && <p style={styles.success}>{message}</p>}
        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" style={styles.button}>Signup</button>

        <div style={styles.footer}>
          <p>Already have an account? <Link to="/" style={styles.link}>Login</Link></p>
        </div>
      </form>
    </div>
  );
}

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
  success: {
    color: 'green',
    textAlign: 'center',
    marginBottom: '10px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '10px',
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
