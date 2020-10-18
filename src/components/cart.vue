<template>
    <div v-if="cartItems.length > 0" class="cart-items">
        <div class="cart-item" v-for="(product, index) in cartItems" :key="index">
            <span>{{product.data.title}} </span>
            <div class="qty-wrapper">
                <button @click="decreaseQty(product)">-</button><input class='qty' type="text" readonly="" v-bind:value="product.qty"> <button @click="increaseQty(product)">+</button>
            </div>
        </div>
    </div>
    <h1 class="cart-warn-message" v-else>You haven't added any product yet 😢</h1>
</template>

<script>
    export default {
        computed: {
            cartItems() {
                return this.$store.getters.cartItems;
            }
        },
        methods: {
            increaseQty(product) {
                this.$store.dispatch('increaseQty', product)
            },
            decreaseQty(product) {
                this.$store.dispatch('decreaseQty', product)
            }
        }
    }
</script>

<style scoped>
    .cart-warn-message,
    .cart-items {
        min-height: 400px;
        margin-top: 30px;
    }
    button {
        border: 2px solid #ddd;
        padding: .5rem;
        width: 40px;
        background: #f5f5f5;
        color: #888;
        font-size: 1rem;
        cursor: pointer;
    }
    .qty {
        border: 0;
        border-top: 2px solid #ddd;
        border-bottom: 2px solid #ddd;
        border-radius: 0;
        width: 2.5rem;
        text-align: center;
        padding: 0 .5rem;
    }
    .qty-wrapper {
        display: flex;
    }
    .cart-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 300px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .cart-warn-message {
        margin-top: 50%;
    }
</style>
