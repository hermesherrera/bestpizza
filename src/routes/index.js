import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index.vue'
import home from '../views/home/index.vue'
import store from '../views/store/index.vue'
import storeVuex from '../stores/index.js'

Vue.use(VueRouter)

const isNotLogged = (to, from, next) => {
    if (!storeVuex.state.login.isLogged) {
	next()
	return
    }
    next('/home')
}

const isLogged = (to, from, next) => {
    if (storeVuex.state.login.isLogged) {
	next()
	return
    }
    next('/')
}

const routes = [
    {
	path: '/',
	name: 'login',
	component: login,
	beforeEnter: isNotLogged,
    },
    {
	path: '/home',
	name: 'home',
	component: home,
	beforeEnter: isLogged,
    },
    {
	path: '/store',
	name: 'store',
	component: store,
	beforeEnter: isLogged,
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : routes,
})

export default router
