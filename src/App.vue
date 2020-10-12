<template>
  <div id="app">
    <AppHeader/>
    <AppProductList/>
  </div>
</template>

<script>

import AppProductList from "@/components/ProductsList";
import AppHeader from "@/components/Header";

export default {
  name: 'App',
  components: {
    AppProductList,
    AppHeader
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
:root {
  --main: #2F4858;
  --white: #fff;
}
* {
  padding: 0;
  margin: 0;
  transition: all 0.3s;
}
#app{
  width: 960px;
  box-shadow: 0 3px 20px #00000023;
  font-family: 'Gilroy', sans-serif;
  padding: 10px;
  margin: 20px auto;
  color: var(--main);
}
.stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
}
.stats__title {
  margin: -10px -10px 10px -10px;
  padding: 10px;
  background-color: var(--main);
  color: var(--white);
  font-weight: 500;
}
.task {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: -10px -10px 10px -10px;
  padding: 10px;
  max-width: 25%;
  width: 100%;
  text-align: left;
}
.task:hover > div {
  background-color: #2f485811;
}
.task__title {
  font-size: 18px;
}
.task__desc {
  font-weight: 500;
  font-size: 16px;
}
.task__done {
  height: 30px;
  width: 30px !important;
  border: none;
  background-color: unset;
}
.task__done:hover {
  cursor: pointer;
  border-radius: 4px;
  background-color: #9ee493bb;
}
.add_task {
  display: flex;
  margin-bottom: 20px;
}
.add_task__input {
  width: 50%;
  text-align: left;
}
input {
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 0 5px 5px;
  font-family: 'Gilroy',sans-serif;
  border: 2px solid #2f485811;
  border-radius: 4px;
}
textarea {
  width: 50%;
  padding: 5px 0 5px 5px;
  font-family: 'Gilroy',sans-serif;
  border: 2px solid #2f485811;
  border-radius: 4px;
}
.add_task__input input {
  margin-bottom: 5px;
}
.add_task__btn {
  background-color: unset;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 0 5px 5px;
  font-family: 'Gilroy',sans-serif;
  border: 2px solid #2f485811;
  background-color: var(--main);
  color: #fff;
  border-radius: 4px;
}
.add_task__btn:hover {
  cursor: pointer;
  border-radius: 4px;
  background-color: #2f485811;
  color: black;
}
.main-wrapper {
  display: flex;
}
h3 {
  text-align: left;
}

</style>
