// backend/app.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/authRoutes');

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB Atlas connection URI
const MONGODB_URI = 'mongodb+srv://CHEGEBB:Phil@2003@glamour.cjncwua.mongodb.net/?retryWrites=true&w=majority&appName=Glamour';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Use auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
