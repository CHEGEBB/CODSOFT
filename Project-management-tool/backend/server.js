const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors package
const connectDB = require('./config/db'); // Ensure correct path to db.js
const projectRoutes = require('./routes/projectRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Enable CORS for all routes
app.use(cors()); // Add this line to enable CORS

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);

// Error handling middleware (optional)
app.use(require('./middleware/errorMiddleware'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
