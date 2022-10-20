import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const actions = {
    setToken(context){
        let token = Math.random()
        context.commit('updateToken',token)
    }
}

const mutations = {
    updateCartProductcount(state,value){
        state.cartProductcount = value
    },
    updateToken(state,value){
        state.token = value
    }
}

const state = {
    cartProductcount : 0,
    token:''
}

const getters = {}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
    plugins: [createPersistedState()]
})