<template>
  <div class="minicart-wrapper">
    <span @click="openModal">Cart:{{totalNumberOfCartItems}}</span>
    <modal v-model="modalOpen"></modal>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  name: 'AppMinicart',
  components: {
    Modal
  },
  data() {
    return {
      modalOpen: false
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    }
  },
  computed: {
    totalNumberOfCartItems() {
      return this.$store.getters.totalNumberOfCartItems;
    }
  }
}
</script>

<style>
.minicart-wrapper {
  position: relative;
}
</style>
