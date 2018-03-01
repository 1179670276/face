<template lang="pug">
  .nav
    img(src="./../../static/img/back.png" ,@click="back")
    span {{title}}
</template>

<script>
  export default {
    props:['title'],
    methods:{
      back() {
        this.$utils.GO_BACK(this)
      }
    }

  }
</script>

<style lang="less" scoped>
  .nav{
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #eee;
    img{
      position: absolute;
      width: 40px;
      height: 40px;
      margin:5px 0;
    }
    span{
      display: block;
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      color: #fff;
    }
  }

</style>
