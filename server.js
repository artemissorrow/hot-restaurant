const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let waitinglist = [];
let reservations = [];

app.get('/', (req, res) => {
    res.send('Reservation Depot!');
  });

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));