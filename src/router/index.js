import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../views/About";
import Contact from "../views/Contact";
import PortfolioList from "../views/PortfolioList";
import PortfolioView from "../views/PortfolioView";
import HelloWorld from "../components/HelloWorld";

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
    {
        path: '/hello-world',
        name: 'HelloWord',
        component: HelloWorld
    },
    // {
    // path: '/contact',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    routes
})

export default router
