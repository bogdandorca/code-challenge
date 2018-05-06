import Vue from 'vue';
import Vuex from 'vuex';
import api from '../services/entity.api';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        characters: [],
        comics: [],
        selectedCharacters: {
            character1: '',
            character2: ''
        },
        tableState: ''
    },
    getters: {
        characters: state => state.characters,
        comics: state => state.comics,
        selectedCharacters: state => state.selectedCharacters,
        tableState: state => state.tableState
    },
    mutations: {
        SET_CHARACTERS: (state, payload) => state.characters = payload,
        SET_COMICS: (state, payload) => state.comics = payload,
        SET_SELECTED_CHARACTERS: (state, payload) => state.selectedCharacters = payload,
        SET_SELECTED_CHARACTER: (state, payload) => state.selectedCharacters[payload.key] = payload.value,
        SET_TABLE_STATE: (state, payload) => state.tableState = payload
    },
    actions: {
        initCharacters: ({ commit }) => {
            api.getAllCharacters().then(characters => commit('SET_CHARACTERS', characters));
        },
        setComics: ({ commit }, payload) => {
            commit('SET_COMICS', payload);
        },
        setComicsByCharacters: ({ commit }, payload) => {
            api.getComicByCharacters(payload.character1, payload.character2)
                .then(comics => {
                    commit('SET_COMICS', comics);
                    commit('SET_TABLE_STATE', 'We were not able to find any comic in which both characters appeared :(');
                });
        },
        setSelectedCharacters: ({ commit }, payload) => {
            commit('SET_SELECTED_CHARACTERS', payload);
        },
        setSelectedCharacter: ({ commit }, payload) => {
            commit('SET_SELECTED_CHARACTER', payload);
        }
    }

});