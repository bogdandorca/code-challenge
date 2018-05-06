const express = require('express');
const app = express();
const charactersController = require('./characters.controller');

app.get('/', (req, res) => {
    res.send(charactersController.getCharacters());
});

module.exports = app;