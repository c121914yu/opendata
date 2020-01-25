<template>
  <div id="app">
    <Nav></Nav>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Nav from './pages/nav/nav'
  export default {
    components:{
      Nav
    }
  }
global.Router = (that,name) => that.$router.push({name:name})
global.Message = (that,type,text) => {
  that.$message({
    message: text,
    type: type,
    duration : 2000,
    center: true,
    offset : 60
  });
}

global.waiting = (that,text) => {
  return that.$loading({
    lock: true,
    text: text,
    spinner: 'el-icon-loading',
    background: 'rgba(244,244,244,0.7)',
    customClass : 'waiting'
  });
   
}
</script>

<style>
  /* 通用的css样式 */
  @import url("../static/comment.css");
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }
  .view{
    background-color: #f4f4f4;
    width: 100%;
    height: 100vh;
  }

</style>
