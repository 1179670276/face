<template lang="pug">
  .Hello
    .background_img
      .header
        img(src="./../../static/img/12@2x.png")
      .content
        ul
          li(v-for="(data,index) in list")
            img(:src="data.img2")
            span {{data.explain}}
            router-link(:to="{name:'info',params:{action:data.action}}")
              img(src="./../../static/img/enter@2x.png")



</template>

<script>
export default {
  name: 'HelloWorld',
  components:{
  },
  data () {
    return {
      list: this.$config.INDEX_LIST,
    }

  }

}
</script>

<style lang="less" scoped>
  .Hello{
    .background_img{
      height: 100%;
      width: 100%;
      background: url("./../../static/img/Layer1@2x.png");
      background-size: 100%;
      .header{
        padding-top: 30px;
        img{
          width: 92%;
          display: block;
          margin: 0 auto;
        }
      }
      .content{
        ul{
          width: 100%;
          top: 185px;
          li{
            position: relative;
            margin-top: -33px;
            img{
              display: block;
              width: 100%;
            }
            span{
              color: #fff;
              font-size: 12px;
              line-height: 18px;
              width: 128px;
              height: 30px;
              position: absolute;
              margin: -31% 0 0 57% ;
            }
            a{
              position: absolute;
              width: 30%;
              img{
                margin: -106% 0 0 50%;
              }
            }
          }
          li:first-child{
            margin-top: 15px;
          }
        }
      }

    }
  }



</style>
