export default {
    getAllCharacters() {
        return fetch('/api/characters')
            .then(res => res.json());
    },
    getAllComics() {
        return fetch('/api/comics')
            .then(res => res.json());
    },
    getComicById(id) {
        return fetch(`/api/comics/${id}`)
            .then(res => res.json());
    },
    getComicByCharacters(char1, char2) {
        return fetch(`/api/comics/${char1}/${char2}`)
            .then(res => res.json());
    }
};