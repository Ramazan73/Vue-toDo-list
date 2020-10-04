<template>
  <div class="minicart-wrapper">
    <span>Cart:{{totalNumberOfCartItems}}</span>
  </div>
</template>

<script>
export default {
  name: 'AppMinicart',
  computed: {
    totalNumberOfCartItems() {
      return this.$store.getters.totalNumberOfCartItems;
    }
  }
}
</script>
