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
  .logo {
    display: flex;
    max-width: 90px;
  }
</style>