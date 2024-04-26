import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Shop from './pages/Shop';
import User from './pages/User';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/shop" component={Shop} />
            <Route path="/user" component={User} />
            <Footer />
        </Router>
    );
}

export default App;
