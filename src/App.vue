
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
  }
}
</script>

<style lang="less">
  //清除css样式
  @import url("./assets/css/reset");
  body,html,#app{
    height: 100%;
  }
#app {

}
</style>
