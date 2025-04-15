import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/products">📦 Products</Link>
      <Link to="/add-product">➕ Add Product</Link>
      <Link to="/">🔑 Logout</Link>
    </nav>
  );
}
