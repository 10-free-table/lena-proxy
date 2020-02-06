const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const axios = require('axios');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/:id', express.static('public'))

app.get('/', (req, res) => {
    // console.log(“http://localhost:1128/hotels/” + req.params.hotelId + “/”);
    // res.send(req.params.hotelId);
    axios
        .get('http://localhost:3001/')
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

app.get('/', (req, res) => {
    axios
        .get('http://localhost:3002/:id')
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

app.get('/', (req, res) => {
    axios
        .get('http://localhost:3003')
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});