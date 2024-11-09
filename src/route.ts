import { createWebHistory, createRouter, } from 'vue-router'

import HomeView from './pages/Home/index.vue'
import BlogView from './pages/Blog/blog-content.vue'

const routes = [
    {
        path: '/', component: HomeView, children: [

        ]
    }, { path: '/blog/:key', component: BlogView, children: [] }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router