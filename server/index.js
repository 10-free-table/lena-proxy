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

app.get('/:pagenum', (req, res) => {
    axios.get('http://18.191.29.48:3002/' + req.params.pagenum)
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