const express = require('express');
const app = express();
const comicsController = require('./comics.controller');

app.get('/', async (req, res) => {
        res.send(await comicsController.getComics());
    })
    .get('/:id', async (req, res) => {
        const comicId = req.params.id;
        res.send(await comicsController.getComicById(comicId));
    })
    .get('/:char1/:char2', async (req, res) =>{
        const char1 = req.params.char1;
        const char2 = req.params.char2;

        res.send(await comicsController.getComicByCharacters(char1, char2));
    });

module.exports = app;