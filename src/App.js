import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Collections";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import User from "./pages/User";
import CartIcon from "./images/ic--round-shopping-cart.svg";
import Wishlist from "./images/icon-park-solid--love-and-help.svg";
import SearchIcon from "./images/ant-design--search-outlined.svg";
import FilterIcon from "./images/bx--filter.svg";

const App = () => {
  return (
    <Router>
      <div className="header">
        <div className="phone">
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="email">
          <p>info@glamourgallerie.com</p>
        </div>
        <div className="my-account">
          <p>My Account</p>
        </div>
      </div>
      <div className="bar">
        <div className="cart">
          <img src={CartIcon} alt="Cart Icon" />
          <p>Cart</p>
        </div>
        <div className="wishlist">
          <img src={Wishlist} alt="Wishlist Icon" />
          <p>Wishlist</p>
        </div>
      </div>
      <div className="search-container">
          <input type="text" className="input-field" placeholder="Search for products here..." />
          <span className="filter-icon">
            <img src={FilterIcon} alt="Filter Icon" />
          </span>
          <button type="submit">
            <img src={SearchIcon} alt="Search Icon" />
          </button>
        </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
