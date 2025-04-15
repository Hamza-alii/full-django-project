# 🛍️ React Product Management Dashboard

React-based web application for managing products with features like authentication (login/signup), charts, dark mode toggle, and CRUD operations. Built using React, Chart.js, Axios, and React Router.

---

## 🚀 Features

- 🔐 User Authentication (Login / Signup)
- 📊 Dashboard Overview with Bar, Pie, and Doughnut Charts
- 🌙 Dark Mode / Light Mode Toggle
- 🧮 Add, Edit, and List Products
- 📂 Category grouping
- 📈 Quantity & Value visualization
- 📦 Sidebar navigation

---

## 📁 Project Structure

├── public/ ├── src/ │ ├── components/ │ │ ├── Sidebar.js │ │ ├── Header.js │ │ └── ... │ ├── pages/ │ │ ├── Login.js │ │ ├── Signup.js │ │ ├── Dashboard.js │ │ ├── AddProduct.js │ │ ├── EditProduct.js │ │ └── ProductList.js │ ├── services/ │ │ └── api.js │ ├── context/ │ │ └── DarkModeContext.js │ ├── App.js │ ├── index.js │ └── styles/ │ └── *.css

yaml
Copy
Edit

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **Axios** - API calls
- **Chart.js & react-chartjs-2** - Graphs & Data Visualizations
- **Context API** - Global Dark Mode
- **CSS3** - Styling & Dark Theme

---

## 📦 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/react-product-dashboard.git
   cd react-product-dashboard
Install dependencies

bash
Copy
Edit
npm install
Run the development server

bash
Copy
Edit
npm start
The app will be available at http://localhost:3000

🧠 Usage
📝 Signup for a new account

🔑 Login to access the dashboard

➕ Add new products

✏️ Edit or update existing products

📊 View insights like category counts, quantity, and value using charts

🌙 Toggle between Dark/Light themes

🌑 Dark Mode Support
Dark mode is available globally throughout the app and persists across different pages like Dashboard, Add Product, and Product List.

🧩 API
Make sure you have a backend running (e.g., Django, Express, or similar), exposing the following endpoints:

POST /api/login/

POST /api/signup/

GET /api/products/

POST /api/products/

PUT /api/products/:id

DELETE /api/products/:id



