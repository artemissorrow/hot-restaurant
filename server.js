const express = require('express');
const path = require('path');
const reservations = require('./reservations');
const waitinglist = require('./waitinglist');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/booktable', (req, res) => res.sendFile(path.join(__dirname, './public/booktable.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, './public/tables.html')));

app.get('/api/tables', (req, res) => res.json(reservations));

app.post('/api/tables', (req, res) => {
    const newReservation = req.body;
  
    if(reservations.length<5){
        reservations.push(newReservation);
        res.json(newReservation);
    }
    else{
        waitinglist.push(newReservation);
    }
});

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));