<template>
  <div id="app">
    <h1>hello gavin</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-link to="/"> home</router-link>
    <router-link to='/index'>index </router-link>
    <router-view></router-view>
  </div>
</template>

<script>

console.log("开始渲染dljflajlkfjlkajlkfjlajdfasd", )
export default {
  name: 'App',
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
</style>
