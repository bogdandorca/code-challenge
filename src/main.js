import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

new Vue({
    el: '#app',
    store,
    router,
    created: function() {
        this.$store.dispatch('initCharacters');
    },
    render: h => h(App)
});