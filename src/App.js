import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { hydrate, createRoot } from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import OrderHistory from './OrderHistory';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<OrderHistory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// Use hydrate for server-side rendering (SSR) compatibility
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  createRoot(rootElement).render(<App />);
}

export default App;
