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

// Other middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

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
