const express = require('express');
const app = express.Router();

const dummyData = require('../data/dummyData.json');


app.get('/', (req, res) => {
    res.json(dummyData);
})


module.exports = app;