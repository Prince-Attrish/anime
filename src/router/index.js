import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Movies from '../views/Movies.vue'
import Popular from '../views/popular.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/anime/",
            component: HomeView
        },
        {
            path: "/anime/movies",
            component: Movies
        },
        {
            path: "/anime/most-popular",
            component: Popular
        },
        {
            path: "/anime/:notFound",
            component: NotFoundPage
        },
    ]
})

export default router