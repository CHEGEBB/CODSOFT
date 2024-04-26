import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Products from './components/Products.jsx';
import Shop from './components/Shop.jsx';
import User from './components/User.jsx';
import Checkout from './components/Checkout.jsx';
import Cart from './components/Cart.jsx';
import Login from './components/Login.jsx';

const App = () => {
    return (
        <Router>
            <div className="App">
                <h1>My Website</h1>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/products" component={Products} />
                <Route path="/shop" component={Shop} />
                <Route path="/user" component={User} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    );
}

export default App;
