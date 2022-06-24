require('./bootstrap');

import { createApp } from 'vue';
import routes from './routes';

//importacion de axios
import axios from 'axios';

import App  from './components/App.vue';

const app = createApp(App).use(routes);

app.mount('#app');
app.config.globalProperties.$axios = axios;
window.axios = axios;

/* //Configuracion de vue
import vue from 'vue';
window.vue = vue;

import App  from './components/App.vue';

//importacion de axios
import VueAxios from 'vue-axios';
import axios from 'axios';

//importacion de vue router
import VueRouter from 'vue-router';
import {routes} from './routes';
import Vue from 'vue'

Vue.use(VueRouter);
Vue.use(VueAxios,axios);

const router = new VueRouter({
    mode:'history',
    routes:routes
});

const app = new Vue({
    el:"#app",
    router:router,
    render: h => h(App)
});*/

