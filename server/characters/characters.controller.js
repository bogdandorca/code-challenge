const fs = require('fs');
const path = require('path');

class CharactersController {
    constructor() {
        this.characters = [];
    }

    fetchCharacters() {
        const charactersFile = path.join(__dirname, '../../', '/data/all_characters.json');
        return JSON.parse(fs.readFileSync(charactersFile, 'utf8'));
    }

    initCharacters() {
        this.characters = this.fetchCharacters();
    }

    getCharacters() {
        if (!this.characters.length) this.initCharacters();
        return this.characters;
    }
}

module.exports = new CharactersController();