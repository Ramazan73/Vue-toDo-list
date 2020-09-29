<template>
    <div class="task">
        <div>
          <img :src="'../assets' + data.image" >
          <router-link
              active-class="is-active"
              class="link"
              :to="{ name: 'task', params: { id: data.id } }">
          <h3 class="task__title">{{ data.title }} </h3>
          </router-link>
            <p class="task__brand">{{ data.brand }} </p>
            <p class="task__price-value">{{ data.regular_price.value }}
              <span class="task__price-currency">{{ data.regular_price.currency }}</span>
            </p>
          <button @click="addToCart(data)">Add To Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    methods: {
      addToCart(product) {
        console.log(product)
      }
    }
}
</script>