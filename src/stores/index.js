import Vue from 'vue'
import Vuex from 'vuex'
import stores from '../storesList.json'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
	storesList: stores,
	storeDetails: [],
	login: {
	    isLogged: false,
	    user: [],
	}
    },
    mutations: {
	SET_STORES_LIST(state, stores){
	    state.storesList = stores
	},

	SET_STORE_DETAILS(state, storeDetails){
	    state.storeDetails = storeDetails
	},

	SET_LOGIN(state, login){
	    state.login = login
	    localStorage.isLogged = login.isLogged
	    localStorage.email = login.user.email
	}
    },
    actions: {
	storesListFilter ({ state, commit }, filter) {
	    commit('SET_STORES_LIST', stores.filter((store) => {
		var flag = false
		Object.values(store).forEach((val) => {
		    if (String(val).indexOf(filter) > -1 ) {
			flag = true
			return
		    }
		})
		if (flag) return store
	    })
	)},

	login({ commit }, username){
	    axios
		.get(`https://jsonplaceholder.typicode.com/users?email=${username}`)
		.then(response => {
		    if (response.data.length > 0){
			commit('SET_LOGIN',{
			    isLogged: true,
			    user: response.data[0],
			})
		    }
		})
	
	}
    },
})
