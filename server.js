// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 6000;

app.use(cors());
app.use(express.json()); //incoming JSON data

const flights = [
  { id: 1, flightNumber: 'ABC123', from: 'New York', to: 'Los Angeles', departureTime: '2023-07-25T10:00:00Z' },
  { id: 2, flightNumber: 'XYZ456', from: 'Los Angeles', to: 'New York', departureTime: '2023-07-25T11:30:00Z' },
  { id: 3, flightNumber: 'DEF789', from: 'London', to: 'Paris', departureTime: '2023-07-25T12:00:00Z' },
  { id: 4, flightNumber: 'GHI101', from: 'Paris', to: 'London', departureTime: '2023-07-25T13:30:00Z' },
  { id: 5, flightNumber: 'JKL234', from: 'Tokyo', to: 'Seoul', departureTime: '2023-07-25T14:00:00Z' },
  { id: 6, flightNumber: 'MNO567', from: 'Seoul', to: 'Tokyo', departureTime: '2023-07-25T15:30:00Z' },
  { id: 7, flightNumber: 'PQR890', from: 'Sydney', to: 'Melbourne', departureTime: '2023-07-25T16:00:00Z' },
  { id: 8, flightNumber: 'STU123', from: 'Melbourne', to: 'Sydney', departureTime: '2023-07-25T17:30:00Z' },
  { id: 9, flightNumber: 'VWX456', from: 'New York', to: 'London', departureTime: '2023-07-26T10:00:00Z' },
  { id: 10, flightNumber: 'YZA789', from: 'London', to: 'New York', departureTime: '2023-07-26T11:30:00Z' },
];

app.post('/flights', (req, res) => {
  const { from, to, date } = req.body;

  // Filter flights based on the provided locations and date (Replace this with your filtering logic)
  const availableFlights = flights.filter((flight) => {
    return flight.from === from && flight.to === to && flight.departureTime.startsWith(date);
  });

  res.json(availableFlights);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
