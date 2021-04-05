const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let waitinglist = [];
let reservations = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/booktable', (req, res) => res.sendFile(path.join(__dirname, 'booktable.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

// app.get('/', (req, res) => {
//     res.send('Reservation Depot!');
//   });

// app.get('/tables', (req, res) => {
//     res.send('booked tables will go here!');
//   });

// app.get('/booktable', (req, res) => {
//     res.send('Booking form will go here!');
//   });

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));