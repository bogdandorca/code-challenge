export default {
    _charactersEndpoint: `/data/all_characters.json`,
    _comicsCommonPath: `/data/comics-`,
    _comicsIds: [1009220, 1009351, 1009368, 1009610, 1009664, 1009718],

    getAllCharacters() {
        return fetch(this._charactersEndpoint)
            .then(res => res.json());
    },

    getAllComics() {
        // Get the list of comics and concatenate them
        const promises = this._comicsIds.map((batchId) => fetch(`${this._comicsCommonPath}${batchId}.json`));

        return Promise.all(promises)
            .then((responses) => Promise.all(responses.map((response) => response.json())));
    }
};