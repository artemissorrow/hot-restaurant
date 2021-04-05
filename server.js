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

app.get('/tables', (req, res) => res.json(reservations));

app.post('/tables', (req, res) => {
    const newReservation = req.body;
  
    if(reservations.length<5){
        console.log(newReservation);
  
        reservations.push(newReservation);
        res.json(newReservation);
        console.log(reservations);
    }
    else{
        console.log(newReservation);
  
        waitinglist.push(newReservation);
        console.log(waitinglist);
    }
});

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));