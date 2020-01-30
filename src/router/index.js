import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../views/About";
import Contact from "../views/Contact";
import PortfolioList from "../views/PortfolioList";
import PortfolioView from "../views/PortfolioView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/portfolio/:project_slug',
        name: 'PortfolioView',
        component: PortfolioView
    },
    {
        path: '/portfolio',
        name: 'PortfolioList',
        component: PortfolioList
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
