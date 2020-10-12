<template>
  <div class="modal" v-show="value">
    <div class="container">
      <div class="minicart-modal-title">
        <span>Название</span>
        <span>Количество</span>
      </div>
      <div class="minicart-modal" v-for="(product, index) in cartItems" :key="index">
        <span>{{product.title}} </span>
        <span> {{product.quantity}}</span>
      </div>
      <button @click.prevent="close" class="btn-close">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    value: {
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    }
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    }
  }
};
</script>


<style lang="css" scoped>
.modal {
  position: absolute;
  top: 22px;
  width: 230px;
  right: 0;
  background: #ddd;
  padding: 20px;
  border-radius: 10px;
}
.minicart-modal-title,
.minicart-modal {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.btn-close {
  float: left;
  margin-top: 10px;
}
</style>