<template lang="pug">
  .attention
    span 注意:
    ul
      li(v-for="(list,index) in itemData.becareful")
        span {{list.becarefulTitlel}}
    </div>
</template>

<script>
  export default {
    mounted() {
//          var act=this.$route.params.action
//          this.$utils.CyclicData(this,act,this.$config.INDEX_LIST)
//          for(var i=0;i<this.$config.INDEX_LIST.length;i++){
//            if(this.$config.INDEX_LIST[i].action==act){
//              this.info=this.$config.INDEX_LIST[i]
//              break;
//            }
//          }
      var act=this.$route.params.action
      this.$utils.CyclicData(this,act,this.$config.INDEX_LIST)
      //console.log(this.itemData)
    },
    data() {
      return {
        itemData:{}
      }

    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  .attention{
    margin-top: 30px;
    padding: 0 10%;
    span{
      color: #fff;
      font-size: 24px ;

    }
    li{
      margin-top: 20px;
      span{
        color: #fff;
        font-size: 16px;
        line-height: 28px;
      }
    }

  }


</style>
