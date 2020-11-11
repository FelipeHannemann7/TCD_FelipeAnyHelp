import Vue from 'vue'
import VueRouter from 'vue-router'
// import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Principal from '../views/Principal.vue';
import CadastroUser from '../views/CadastroUser.vue';

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
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
