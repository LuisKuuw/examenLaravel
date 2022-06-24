import { createRouter, createWebHistory } from 'vue-router';

//componentes para el crud de books
import View from './components/book/View.vue';
import Crear from './components/book/Crear.vue';
import Editar from './components/book/Editar.vue';

const routes = [
    {
        name: 'viewBooks',
        path: '/books',
        component: View
    },
    {
        name: 'creteBook',
        path: '/createBook',
        component: Crear
    },
    {
        name: 'editBook',
        path: '/editBook/:id',
        component: Editar
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
