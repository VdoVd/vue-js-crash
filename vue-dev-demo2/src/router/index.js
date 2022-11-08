import {createRouter,createWebHistory} from "vue-router";
import AboutComponent from '../views/About'
import HomeComponent from "@/views/Home";
const routes=[
    {
        path: '/about',
        name: 'About',
        component: AboutComponent
    },
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    }
]
const router=createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
export default router
