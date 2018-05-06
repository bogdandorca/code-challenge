import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/pages/home/cc-home.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '*',
            component: Home
        }
    ]
});