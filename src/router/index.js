import Vue from 'vue'
import VueRouter from 'vue-router'

import About from "@/views/About"
import ArticleList from "@/views/ArticleList"
import ArticleView from "@/views/ArticleView"
import Contact from "@/views/Contact"
import PresentationList from "@/views/PresentationList"
import PresentationView from "@/views/PresentationView"
import ProjectList from "@/views/ProjectList"
import ProjectView from "@/views/ProjectView"

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
        path: '/projects/:slug/',
        name: 'ProjectView',
        component: ProjectView
    },
    {
        path: '/projects/',
        name: 'ProjectList',
        component: ProjectList
    },
    {
        path: '/articles/',
        name: 'ArticleList',
        component: ArticleList
    },
    {
        path: '/articles/:slug/',
        name: 'ArticleView',
        component: ArticleView
    },
    {
        path: '/presentations/',
        name: 'PresentationList',
        component: PresentationList
    },
    {
        path: '/presentations/:slug/',
        name: 'PresentationView',
        component: PresentationView
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
