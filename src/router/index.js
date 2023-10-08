import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Movies from '../views/Movies.vue'
import Popular from '../views/popular.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: HomeView
        },
        {
            path: "/movies",
            component: Movies
        },
        {
            path: "/most-popular",
            component: Popular
        },
        {
            path: "/:notFound",
            component: NotFoundPage
        },
    ]
})

export default router