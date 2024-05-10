// backend/app.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/authRoutes');

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://CHEGEBB:Phil@2003@glamour.cjncwua.mongodb.net/Glamour', { useNewUrlParser: true, useUnifiedTopology: true });

// Use auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
