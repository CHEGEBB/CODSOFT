import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import User from "./pages/User";
import "./index.scss";
import Login from "./auth-pages/Login";
import SignUp from "./auth-pages/Signup";
import AdminLogin from "./auth-pages/AdminLogin";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/user" element={<User />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </Router>
  );
}

export default App;
