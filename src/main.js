import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './styles/index.css'
import store from './stores/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuelidate from 'vuelidate'

import router from './routes/index.js'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuelidate)

Vue.config.productionTip = false

window.axios = require('axios')

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
