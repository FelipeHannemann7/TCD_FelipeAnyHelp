import Vue from 'vue'
import VueRouter from 'vue-router'
// import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Principal from '../views/Principal.vue';
import CadastroUser from '../views/CadastroUser.vue';
import Videos from '../views/Videos.vue';
import AjudaPsicologo from '../views/AjudaPsicologo.vue';
import Sobre from '../views/Sobre.vue';

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }, 
  {
    path: '/principal',
    name: 'Principal',
    component: Principal
  }, 
  {
    path: '/CadastroUser',
    name: 'CadastroUser',
    component: CadastroUser
  }, 
  {
    path: '/Videos',
    name: 'Videos',
    component: Videos
  }, 
  {
    path: '/AjudaPsicologo',
    name: 'AjudaPsicologo',
    component: AjudaPsicologo
  }, 
  {
    path: '/Sobre',
    name: 'Sobre',
    component: Sobre
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
