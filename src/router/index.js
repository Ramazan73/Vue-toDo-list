import Vue from 'vue'
import Router from 'vue-router'
import cart from '../components/cart'
import AppProductList from '../components/ProductsList'

Vue.use(Router);

let router = new Router( {
    mode: 'history',
    routes: [
        {
            path: '/cart',
            name: 'cart',
            component: cart
        },
        {
            path: '/',
            name: 'AppProductList',
            component: AppProductList
        }
    ]
});

export default router;
