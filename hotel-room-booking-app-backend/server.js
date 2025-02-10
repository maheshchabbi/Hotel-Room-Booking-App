const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Load .env before using it

const app = express();
app.use(cors());
app.use(express.json());

console.log('🔍 MONGO_URI:', process.env.MONGO_URI);

// Retry MongoDB connection if it fails
const connectWithRetry = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('🚀 MongoDB Connected...'))
    .catch((err) => {
      console.error('⚠️ MongoDB connection error:', err);
      setTimeout(connectWithRetry, 5000); // Retry every 5 seconds
    });
};

connectWithRetry();

// Routes
const auth = require('./routes/api/auth');
const bookings = require('./routes/api/bookings');
const hotels = require('./routes/api/hotels');
const rooms = require('./routes/api/rooms');

app.use('/api/auth', auth);
app.use('/api/bookings', bookings);
app.use('/api/hotels', hotels);
app.use('/api/rooms', rooms);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => 
  console.log(`✈️  Server running at http://localhost:${port}`)
);
