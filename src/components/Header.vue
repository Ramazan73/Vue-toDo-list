<template>
  <div class="header">
    <img src="../assets/logo.png" class="logo" alt="logo">
    <AppMinicart/>
  </div>
</template>

<script>
import AppMinicart from './Minicart.vue'
export default {
  name: 'AppHeader',
  components: {
    AppMinicart
  }
}
</script>

<style>

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid;
  }
</style>