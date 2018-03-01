<template lang="pug">
  .result
    .show(v-if="CurrentShow==1") 11
      pre {{UseInfo}}
    .show(v-else-if="CurrentShow==2") 22
      pre {{UseInfo}}
    .show(v-else-if="CurrentShow==3") 33
      pre {{UseInfo}}
    .show(v-else-if="CurrentShow==4") 44
      pre {{UseInfo}}
    .error(v-else)
      span 请输入地址的太阳一般干部与
</template>

<script>
  import Header from './header'
  // 身份证 http://img3.hefei.cc/forum/201504/07/141838d8cvy8ssozpvsvss.jpg
  // 银行卡：http://pic27.photophoto.cn/20130602/0017029968391387_b.jpg
  // 驾照：http://f.hiphotos.baidu.com/zhidao/pic/item/6a600c338744ebf8bfe7f1eedff9d72a6159a749.jpg
  // 人脸识别：http://p1.wmpic.me/article/2018/01/24/1516760661_pbMCsjSh.jpg
    export default {
        mounted() {
          //console.log(this.action)
          //导航栏上方标题
          console.log(success.data)

        },
        data() {
            return {

            }

        },
        methods: {

          //ajax获取数据


        },
        components:{
          'v-header':Header
      }
    }
</script>

<style lang="less" scoped>
  input{
    margin-top: 40px;
    height: 20px;
  }

</style>
