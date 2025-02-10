const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

// Load environment variables
dotenv.config();

// CORS Configuration (Allow Frontend Access)
const corsOptions = {
    origin: ['http://localhost:3000', 'http://43.205.239.120:3000'], // Allow frontend access
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
};
app.use(cors(corsOptions));

// Bodyparser middleware
app.use(express.json());

// DB Config
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('🚀 MongoDB Connected...'))
    .catch((err) => console.log(err));

// Routes
const auth = require('./routes/api/auth');
const bookings = require('./routes/api/bookings');
const hotels = require('./routes/api/hotels');
const rooms = require('./routes/api/rooms');

// Use Routes
app.use('/api/auth', auth);
app.use('/api/bookings', bookings);
app.use('/api/hotels', hotels);
app.use('/api/rooms', rooms);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`✈️  Server running on port http://43.205.239.120:${port}`));
