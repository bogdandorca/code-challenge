import Vue from 'vue';
import Vuex from 'vuex';
import api from '../services/entity.api';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        characters: [],
        comics: []
    },
    getters: {
        characters: state => state.characters,
        comics: state => state.comics,
        character: (state, characterId) => {
            state.characters.filter(character => character.id === characterId);
        }
    },
    mutations: {
        ADD_CHARACTER: (state, payload) => state.characters.push(payload),
        INIT_CHARACTERS: (state, payload) => state.characters = payload,
        INIT_COMICS: (state, payload) => state.comics = payload
    },
    actions: {
        addCharacter: ({ commit }, payload) => commit('ADD_CHARACTER', payload),
        initCharacters: ({ commit }) => {
            api.getAllCharacters().then(characters => commit('INIT_CHARACTERS', characters));
        },
        initComics: ({ commit }) => {
            api.getAllComics().then(comics => {
                // Join all the comics in a single array
                const joinedComics = [].concat.apply([], comics);
                commit('INIT_COMICS', joinedComics);
            });
        }
    }
});