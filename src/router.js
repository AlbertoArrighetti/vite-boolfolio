import { createRouter, createWebHistory } from "vue-router";

// components

// da decommentare 
import HomePage from './pages/HomePage.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),

    // routes
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
    ]
});

export { router };