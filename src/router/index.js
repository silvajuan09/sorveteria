import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SaboresView from '@/views/SaboresView.vue'
import ContatoView from '@/views/ContatoView.vue'
import CirculosView from '@/views/CirculosView.vue'

const routes = [
{
    path: '/',
    name: 'Home',
    component: HomeView
},
{
    path: '/sabores',
    name: 'Sabores',
    component: SaboresView
},
{
    path: '/contato',
    name: 'Contato',
    component: ContatoView
},
{
    path: '/circulo',
    name: 'Circulo',
    component: CirculosView
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router