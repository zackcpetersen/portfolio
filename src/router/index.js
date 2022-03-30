import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../views/About";
import Contact from "../views/Contact";
import ProjectList from "../views/ProjectList";
import ProjectView from "../views/ProjectView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'About',
        component: About
    },
    {
        path: '/contact/',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/portfolio/:slug/',
        name: 'ProjectView',
        component: ProjectView
    },
    {
        path: '/portfolio/',
        name: 'ProjectList',
        component: ProjectList
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
