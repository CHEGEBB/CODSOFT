import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import Shop from './components/Shop';
import User from './components/User';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Login from './components/Login';

const App = () => {
    return (
        <div className="App">
            <Router basename={process.env.PUBLIC_URL}>
                <Navbar />
                <h1>App</h1>
                <Routes> {/* Use Routes component */}
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
