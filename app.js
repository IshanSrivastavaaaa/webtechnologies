const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json()); // Handles JSON payloads
app.use(express.static(path.join(__dirname, 'public'))); // Serve static frontend files

// Routes
app.use('/auth', authRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
