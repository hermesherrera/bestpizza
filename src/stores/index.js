import Vue from 'vue'
import Vuex from 'vuex'
import stores from '../storesList.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
	storesList: stores,
    },
    mutations: {
	SET_STORES_LIST(state, stores){
	    state.storesList = stores
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
	)}
    },
})
