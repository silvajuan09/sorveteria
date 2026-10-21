import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SaboresView from '@/views/SaboresView.vue'
import ContatoView from '@/views/ContatoView.vue'
<<<<<<< HEAD
import CirculosView from '@/views/CirculosView.vue'
=======
import NoticiasView from '@/views/NoticiasView.vue'
>>>>>>> e721c7a651692f7b035350b86dce5740a4b2e11e

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
<<<<<<< HEAD
    path: '/circulo',
    name: 'Circulo',
    component: CirculosView
=======
    path: '/noticias',
    name: 'Noticias',
    component: NoticiasView
>>>>>>> e721c7a651692f7b035350b86dce5740a4b2e11e
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router