import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartItems: []
    },
    mutations: {
        addToCart (state, payload) {
            let checkingItem = state.cartItems.find(product => product.id == payload.id);
            if (checkingItem) {
                checkingItem.quantity ++;
            } else {
                state.cartItems.push(payload);
                Vue.set(payload, 'quantity', 1);
            }
        },
    },
    actions: {
        addToCart({commit}, product) {
            commit('addToCart', product)
        }
    },
    getters: {
        totalNumberOfCartItems: state => {
            return state.cartItems.length;
        },
        cartItems: state => {
            return state.cartItems;
        },
    }
})
