// CheckoutPage.js

import React, { useState } from 'react';
import './Checkout.scss';
import VisaIcon from '../images/us/fontisto--visa.svg';
import MasterCardIcon from '../images/us/fontisto--mastercard.svg';
import PayPalIcon from '../images/us/fontisto--paypal.svg';

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        paymentMethod: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            zip: '',
            country: '',
            paymentMethod: '',
        });
    };

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <form className="checkout-form" onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className="form">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="checkout-input"
                        required
                    />

                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="checkout-input"
                        required
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="checkout-input"
                        required
                    />

                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="checkout-input"
                        required
                    />

                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="checkout-input"
                        required
                    />

                    <label>Zip:</label>
                    <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="checkout-input"
                        required
                    />

                    <label>Country:</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="checkout-input"
                        required
                    />
                </div>

                <div className="payment-method">
                    <label>Payment Method:</label>
                    <div className="payment-method-options">
                        {/* Payment method options */}
                        <div>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="visa"
                                onChange={handleChange}
                                required
                            />
                            <img src={VisaIcon} alt="Visa" />

                            <input
                                type="radio"
                                name="paymentMethod"
                                value="mastercard"
                                onChange={handleChange}
                                required
                            />
                            <img src={MasterCardIcon} alt="MasterCard" />

                            <input
                                type="radio"
                                name="paymentMethod"
                                value="paypal"
                                onChange={handleChange}
                                required
                            />
                            <img src={PayPalIcon} alt="PayPal" />
                            </div>
                    </div>
                </div>
                <button type="submit" className="checkout-button">
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;
