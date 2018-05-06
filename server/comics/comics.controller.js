const fs = require('fs');
const path = require('path');

class ComicsController {
    constructor() {
        this.initComics();
    }

    fetchComicsFileNames() {
        const dataDir = path.join(__dirname, '../../', '/data');

        return new Promise((resolve, reject) => {
            const comicsNamePattern = new RegExp('comic.*\.json');
            fs.readdir(dataDir, function(err, files) {
                err ? reject(err) : resolve(files.filter(fileName => comicsNamePattern.test(fileName)));
            });
        });
    }

    async fetchComics() {
        const files = await this.fetchComicsFileNames();

        return Promise.all(files.map(fileName => {
            const filePath = path.join(__dirname, '../../', `/data/${fileName}`);
            return new Promise((resolve, reject) => {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    err ? reject(err) : resolve(JSON.parse(data));
                });
            });
        }));
    }

    async initComics() {
        this.comics = [].concat.apply([], await this.fetchComics());
    }

    async getComics() {
        if (!this.comics.length) await this.initComics();

        return this.comics;
    }

    async getComicById(id) {
        if (!this.comics.length) await this.initComics();

        return this.comics.filter(comic => comic.id === +id);
    }

    async getComicByCharacters(char1, char2) {
        if (!this.comics.length) await this.initComics();

        return this.comics.filter(comic => {
            return comic.characters.indexOf(char1) > -1
                && comic.characters.indexOf(char2) > -1;
        });
    }
}

module.exports = new ComicsController();