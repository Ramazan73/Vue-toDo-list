<template>
  <div class="header">
    <router-link to='/'><img src="../assets/logo.png" class="logo" alt="logo"></router-link>
    <nav class="menu">
      <ul>
        <li> <router-link to='/'>Home</router-link></li>
        <li> <router-link to='/cart'>Cart</router-link></li>
      </ul>
    </nav>
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
  .menu ul {
    list-style: none;
    display: flex;
  }
  .menu li {
    margin: 0 10px;
  }
</style>
