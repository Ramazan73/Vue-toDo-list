import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartItem: []
    },
    mutations: {
        updateProducts: (state, products) => {
            state.products = products;
        }
    },
    actions: {

    },
    modules: {

    },
    getters: {
        allTasks(state) {
            return state.tasks
        },
        getProduct: state => id => {
            return state.tasks.find(item => item.id === id) || null
        }
    }
})
