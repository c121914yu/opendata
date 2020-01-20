<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
  import Nav from './pages/nav/nav'
  export default {
    components:{
      Nav
    }
  }
</script>

<style>
  /* 通用的css样式 */
  @import url("../static/comment.css");
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


</style>
