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
global.Router = (that,name,query='') => {
  that.$router.push({
    name:name,
    query:query
  })
}
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
    background: 'rgba(116,116,116,0.7)',
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
    width: 100%;
    min-height: calc(100vh - 60px);
  }

</style>
