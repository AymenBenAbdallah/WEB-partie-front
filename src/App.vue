<template>
  <div id="app">
    <Header />
    <router-view ></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {

  components: {
    Header
  }
}
</script>


<style>
  .vertical-center{
    min-height: 100%;
    min-height: 100vh;

    align-items: center;
  }
</style>