<template>
  <div id="app">
    <div class="main" :style="{height:'100%'}">
      <router-view></router-view>
    </div>
    <footerNav></footerNav>
  </div>
  
</template>

<script>
import footerNav from './components/footerNav.vue'
export default {
  name: 'app',
  data () {
    return {
      direction: 'forward',
      showNav: true
    }
  },
  components: {
    footerNav
  }
}
</script>

<style>
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #f5f5f5;
  }
</style>
