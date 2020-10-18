import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cartItems: []
    },
    mutations: {
        addToCart (state, payload) {
            let candidateId = state.cartItems.findIndex(product => product.id === payload.id);
            if (candidateId >= 0) {
                state.cartItems[candidateId].qty += 1;
            } else {
                state.cartItems.push({
                    id: payload.id,
                    qty: 1,
                    data: Object.assign({}, payload)
                });
            }
        },
        increaseQty (state, product) {
            let candidateId = state.cartItems.findIndex(item => item.id === product.id);
            if (candidateId >= 0) {
                state.cartItems[candidateId].qty += 1;
            }
        },
        decreaseQty (state, product) {
            let candidateId = state.cartItems.findIndex(item => item.id === product.id);
            if (candidateId >= 0 && state.cartItems[candidateId].qty > 1) {
                state.cartItems[candidateId].qty -= 1;
            } else {
                state.cartItems.splice(candidateId,1);
            }
        },
    },
    actions: {
        addToCart({commit}, product) {
            commit('addToCart', product)
        },
        decreaseQty({commit}, product) {
            commit('decreaseQty', product)
        },
        increaseQty({commit}, product) {
            commit('increaseQty', product)
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
