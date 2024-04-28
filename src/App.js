import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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
import CallIcon from "./images/ic--round-call.svg";
import MailIcon from "./images/mdi--email.svg";
import PersonIcon from "./images/mdi--person.svg";


const App = () => {
  return (
    <Router>
      <div className="header">
      <div className="reach">
      <div className="phone">
      <div className="call-icon">
      <img src={CallIcon} alt="CallIcon" />
      </div>
      <div className="number">
      <p>Phone: 123-456-7890</p>
      </div>
        </div>
        <div className="email">
        <div className="mail-icon">
        <img src={MailIcon} alt="CallIcon" />
        </div>
        <div className="mail">
        <p>info@glamourgallerie.com</p>
        </div>
          
        </div>
        <div className="my-account">
        <div className="person-icon">
        <img src={PersonIcon} alt="PersonIcon" />
        </div>
        <div className="account">
        <p>My Account</p>
        </div>
        </div>
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
            <p>Filter</p>
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
    </Router>
  );
};

export default App;
