// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

// Create Express app
const app = express();

// CORS middleware
app.use(cors());

// the app to use json
app.use(express.json());

// Other middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes'); // Add cart routes

app.use('/auth', authRoutes); // Authentication routes
app.use('/products', productRoutes); // Product routes
app.use('/cart', cartRoutes); // Cart routes

// MongoDB Atlas connection string
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB Atlas
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Generate JWT secret key if not already present in .env
if (!process.env.JWT_SECRET) {
    process.env.JWT_SECRET = require('crypto').randomBytes(64).toString('hex');
    console.log('Generated JWT secret key:', process.env.JWT_SECRET);
}

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Add route to handle POST request for storing items data
app.post('/save-items', async (req, res) => {
    try {
        const items = req.body;
        // Save items data to the database
        await Product.insertMany(items);
        res.status(200).json({ message: 'Items data stored successfully' });
    } catch (error) {
        console.error('Error storing items data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
