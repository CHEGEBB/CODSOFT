
import React, { useState } from 'react';
import './Checkout.scss';

const CheckoutPage = () => {
    // State for storing form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        paymentMethod: '', // Store the selected payment method
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data to backend for payment processing and order creation
        // You'll need to implement this part using Axios or fetch
        console.log(formData);
        // Reset form after submission
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
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div>
                    <label>City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div>
                    <label>Zip Code:</label>
                    <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
                </div>
                <div>
                    <label>Country:</label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                </div>
                <div>
                    <label>Payment Method:</label>
                    <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                        <option value="">Select Payment Method</option>
                        <option value="visa">Visa</option>
                        <option value="mastercard">MasterCard</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
