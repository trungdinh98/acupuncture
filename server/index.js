const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

var Users = require('./routes/Users');
app.use('/users', Users);

app.get('/', (req, res) => {
    res.send('Hello server!')
});

app.listen(4000, () => {
    console.log(`Server is listening at http://localhost:4000!`)
});
