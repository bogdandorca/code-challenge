const express = require('express');
const app = express();
const serve = require('express-static');
const fs = require('fs');

// config
const port = process.env.PORT || 8080;

const charactersApp = require('./server/characters/characters.app');
const comicsApp = require('./server/comics/comics.app');

app.use('/api/characters', charactersApp);
app.use('/api/comics', comicsApp);

app.use(serve('./dist'));

app.listen(port, () => {
    console.log(`Access the most awesome app at http://localhost:${port}`);
});