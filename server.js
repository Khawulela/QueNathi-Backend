const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Sample route
app.get('/', (req, res) => {
  res.send('Clinic Booking Backend is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const bookings = require('./models/Booking');

app.get('/bookings', async (req, res) => {
    try {
      const sampleBooking = new bookings({
        ticketnumber: 'T123456',
        appointmentDate: new Date('2025-05-20'),
        reason: 'Checkup',
        status: 'Pending'
      });
    
      await sampleBooking.save();
      res.json({ message: 'Sample booking created successfully' });
    } catch (error) {
      console.error('Error creating sample booking:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});