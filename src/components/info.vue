<template lang="pug">
  .info
    v-header(:title="titles")
    .content
      .search
        input.UseInput(type="text" placeholder="请输入图片地址" requirt v-model="UseInput" autofocus="autofocus")
      .butt
        span(@click="UesrSubmit")
      v-attention(v-if="trues")
      .result(v-else)
        .show(v-if="CurrentShow==1")
          .face
            p 年龄：{{FaceUseInfo.age.value}}
            p 性别:{{FaceUseInfo.gender.value == 'Male' ? '男': '女'}}
            p 颜值（男性认为）：{{FaceUseInfo.beauty.male_score}}
            p 颜值（女性认为）：{{FaceUseInfo.beauty.female_score}}
            p 情绪（愤怒）：{{FaceUseInfo.emotion.anger}}
            p 情绪（厌恶）：{{FaceUseInfo.emotion.disgust}}
            p 情绪（恐惧）：{{FaceUseInfo.emotion.fear}}
            p 情绪（高兴）：{{FaceUseInfo.emotion.happiness}}
            p 情绪（平静）：{{FaceUseInfo.emotion.neutral}}
            p 情绪（伤心）：{{FaceUseInfo.emotion.sadness}}
            p 情绪（惊讶）：{{FaceUseInfo.emotion.surprise}}
            p 人种：{{FaceUseInfo.ethnicity.value == 'Asian' ? '亚洲人' : (FaceUseInfo.ethnicity.value == 'White' ? '白人' : '黑人') }}
            p 是否带眼镜：{{FaceUseInfo.glass.value=='None'? '不佩戴眼镜':(FaceUseInfo.glass.value=='Dark'? '佩戴墨镜':'佩戴普通眼镜')}}
            p 面部特征（健康）：{{FaceUseInfo.skinstatus.health}}
            p 面部特征（色斑）：{{FaceUseInfo.skinstatus.stain}}
            p 面部特征（青春痘）：{{FaceUseInfo.skinstatus.acne}}
            p 面部特征（黑眼圈）：{{FaceUseInfo.skinstatus.dark_circle}}
            p 微笑（微笑程度）：{{FaceUseInfo.smile.value}}
            p 微笑（笑容的阈值）：{{FaceUseInfo.smile.threshold}}


        .show(v-else-if="CurrentShow==2")
          .bank
           span 银行卡号：{{UseInfo[0].number}}
        .show(v-else-if="CurrentShow==3")
          .idcard
            p 姓名:{{UseInfo[0].name}}
            p 性别:{{UseInfo[0].gender}}
            p 民族:{{UseInfo[0].race}}
            p 出生日期:{{UseInfo[0].birthday}}
            p 身份证号:{{UseInfo[0].id_card_number}}
            p 住址:{{UseInfo[0].address}}
            p 正/反面:{{UseInfo[0].side=='front'?'人像面':'国徽面'}}
            //pre {{UseInfo}}
        .show(v-else-if="CurrentShow==4")
          .driver
            p 姓名:{{UseInfo[0].name}}
            p 性别:{{UseInfo[0].gender}}
            p 出生日期:{{UseInfo[0].birthday}}
            p 国籍:{{UseInfo[0].nationality}}
            p 驾驶证号:{{UseInfo[0].license_number}}
            p 准驾车型:{{UseInfo[0].class}}
            p 初次领证日期:{{UseInfo[0].issue_date}}
            p 有效期限:{{UseInfo[0].valid_date}}
            p 签发机关:{{UseInfo[0].issued_by}}
</template>

<script>
  import Header from './header'
  import Attention from './attention'
  // 身份证 http://img3.hefei.cc/forum/201504/07/141838d8cvy8ssozpvsvss.jpg
  // 银行卡：http://pic27.photophoto.cn/20130602/0017029968391387_b.jpg
  // 驾照：http://f.hiphotos.baidu.com/zhidao/pic/item/6a600c338744ebf8bfe7f1eedff9d72a6159a749.jpg
  // 人脸识别：http://p1.wmpic.me/article/2018/01/24/1516760661_pbMCsjSh.jpg
  export default {
    mounted() {
      console.log(this.action)

      //导航栏上方标题
      switch (this.action){
        case 'face':
          this.titles = '人脸识别'
          break;
        case 'bank':
          this.titles = '银行卡识别'
          break;
        case 'idcard':
          this.titles = '身份证识别'
          break;
        case 'drivinglicense':
          this.titles = '驾照识别'
          break;
      }
    },
    data() {
      return {
        UseInput: '',
        UseInfo:{},
        FaceUseInfo:"",
        titles:'',
        trues:true,
        action:this.$route.params.action,
        CurrentShow:0,
      }

    },
    methods: {
      UesrSubmit() {
        //console.log(this.UseInput)
        if(this.UseInput==''){
          alert("不能为空")
        }else {
          this.trues=false;
          switch(this.action){
            case 'face':
              //console.log("人脸识别");
              this.GetData(this.$config.FACE_API.APIURL.FaceDetect,this.UseInput)
              break;
            case 'bank':
              //console.log("银行卡识别");
              this.GetData(this.$config.FACE_API.APIURL.BankCard,this.UseInput)
              break;
            case 'idcard':
              //console.log("身份证识别");
              this.GetData(this.$config.FACE_API.APIURL.IDCard,this.UseInput)
              break;
            case 'drivinglicense':
              //console.log("驾驶证识别");
              this.GetData(this.$config.FACE_API.APIURL.DriverLicense,this.UseInput)
              break;
            default:
              break
          }
        }

      },
      //ajax请求数据
      GetData(url,UserImg){
        this.$http.post(url,{
          api_key:this.$config.FACE_API.CONFIG.APIKEY,
          api_secret:this.$config.FACE_API.CONFIG.APISECRET,
          image_url:UserImg,
          return_attributes:'gender,age,smiling,glass,emotion,ethnicity,beauty,mouthstatus,skinstatus'
        })
          .then(success=>{
            console.log(success)
            switch (this.action){
              case 'face':
                this.UseInfo=success.data.faces
                this.CurrentShow=1
                break;
              case 'bank':
                this.UseInfo=success.data.bank_cards
                this.CurrentShow=2
                break;
              case 'idcard':
                this.UseInfo=success.data.cards
                this.CurrentShow=3
                break;
              case 'drivinglicense':
                this.UseInfo=success.data.cards
                this.CurrentShow=4
                break;
            }
            //console.log(success.data.cards)

            this.FaceUseInfo=this.UseInfo[0].attributes



             //console.log(this.FaceUseInfo.gender.value)
             console.log(this.UseInfo[0])
             //console.log(this.UseInfo)


          })
          .catch(error=>{
            console.log("失败")
          })
      }
    },
    components:{
      'v-header':Header,
      'v-attention':Attention
    }
  }
</script>

<style lang="less" scoped>
  .info{
    height: 100%;
    background: url("./../../static/img/border@2x.png") no-repeat;
    background-size: 100%;
  }
  .content{
    padding-top:20px ;
    .search{
      background: url("./../../static/img/search@2x.png") no-repeat center;
      background-size: 100%;
      margin: 0 40px;
      input{
        width: 95%;
        font-size: 20px;
        color: #fff;
        background: none;
        border: none;
        outline: #15a3ca;
        line-height: 60px;
        padding: 0 15px;

      }
    }
    .butt{
      width: 45%;
      height: 60px;
      margin: 0 auto;
      background: url("./../../static/img/click@2x.png") no-repeat center ;
      span{
        display: block;
        width: 100%;
        height: 60px;
        line-height: 60px;
        border: none;
        background: none;
        margin-top: 20px;
      }
    }
    .result{
      color: #fff;
      padding: 0 10%;
      margin-top: 20px;
      .face{

      }
      .bank{

      }
    }


  }


</style>
