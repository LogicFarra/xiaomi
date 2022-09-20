import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const actions = {}

const mutations = {
    updateCartProductcount(state,value){
        state.cartProductcount = value
    }
}

const state = {
    cartProductcount : 0
}

const getters = {}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
    plugins: [createPersistedState()]
})