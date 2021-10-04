<template>
  <div id="app">
    <Header/>
    <Home msg="Welcome to Your Vue.js App"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue'
import Home from './components/Home.vue'
import Footer from './components/layouts/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
