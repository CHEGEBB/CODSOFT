// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/products" component={Products} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/user" component={User} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
