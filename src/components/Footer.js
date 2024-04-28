import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Customer Service</h3>
                    <ul>
                        <li>Help & Contact Us</li>
                        <li>Returns & Refunds</li>
                        <li>Online Stores</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li>What We Do</li>
                        <li>Available Services</li>
                        <li>Latest Posts</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Subscribe</h3>
                    <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
