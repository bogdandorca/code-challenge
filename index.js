const express = require('express');
const app = express();

// config
const port = process.env.PORT || 8080;

const charactersApp = require('./server/characters/characters.app');
const comicsApp = require('./server/comics/comics.app');

app.use('/api/characters', charactersApp);
app.use('/api/comics', comicsApp);

app.use(express.static('./dist'));

app.listen(port, () => {
    console.log(`Access the most awesome app at http://localhost:${port}`);
});