<template>
  <div>
    <h1>Task page {{ $route.params.id}}</h1>
    <div class="task">
      <div>
        <router-link
            active-class="is-active"
            class="link"
            :to="{ name: 'task', params: { id: product.id } }">
          <h3 class="task__title">{{ product.title }} </h3>
        </router-link>
        <p class="task__price">{{ product.regular_price.currency }} </p>
        <p class="task__price">{{ product.brand }} </p>
        <p class="task__priority">Приоритет: {{ product.priority }} </p>
      </div>
      <button @click="taskDone()" class="task__done">✔</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTaskItem',
  data() {
    return {
      product: null
    }
  },
  created() {
    console.log(this.$route)

    let product = this.$store.getters['getProduct'](this.$route.params.id)
    if (product) {
      this.product = Object.assign({},product)
    }
  }
}
</script>