export default {
  // face++ 相关的api配置
  FACE_API : {
    CONFIG: {
      APIKEY: 'xfXREfL_pXgnqK2GedOunNPN2MFYSsPR',
      APISECRET: 'x0PGyvHoVSjX19KlkjH1Ct7Md5wxz8aV'
    },
    APIURL : {
      FaceDetect:'https://api-cn.faceplusplus.com/facepp/v3/detect',
      IDCard: 'https://api-cn.faceplusplus.com/cardpp/v1/ocridcard',
      DriverLicense: 'https://api-cn.faceplusplus.com/cardpp/v1/ocrdriverlicense',
      VehicleLicense: 'https://api-cn.faceplusplus.com/cardpp/v1/ocrvehiclelicense',
      BankCard: 'https://api-cn.faceplusplus.com/cardpp/beta/ocrbankcard'
    }
  },

  INDEX_LIST : [
    {
      title: '人脸识别',
      img: './../../static/img/face.png',
      img2:"./../../static/img/face@2x.png",
      explain:'能够对人脸图像进行各类复杂变换操作',
      action: 'face',
      becareful: [
        {
          id: 1,
          becarefulTitlel : '1：提供您的照片进行人脸检测和人脸分析'
        },
        {
          id: 2,
          becarefulTitlel : '2：支持图片URL，格式：JPG(JPEG)，PNG'
        },
        {
          id: 3,
          becarefulTitlel : '3：尺寸：最小48*48像素，最大4096*4096像素'
        },
        {
          id: 4,
          becarefulTitlel : '文件：最大2 MB '
        }
      ]
    },
    {
      title: '银行卡识别',
      img: './../../static/img/blank.png',
      img2:"./../../static/img/bank@2x.png",
      explain:'自动获取用户银行卡卡号等关键信息',
      action: 'bank',
      becareful: [
        {
          id: 1,
          becarefulTitlel : '1：提供您的照片进行人脸检测和人脸分析'
        },
        {
          id: 2,
          becarefulTitlel : '2：支持图片URL，格式：JPG(JPEG)，PNG'
        },
        {
          id: 3,
          becarefulTitlel : '3：尺寸：最小48*48像素，最大4096*4096像素'
        },
        {
          id: 4,
          becarefulTitlel : '文件：最大2 MB '
        }
      ]
    },
    {
      title: '身份证识别',
      img: './../../static/img/sfz.png',
      img2:"./../../static/img/idcard@2x.png",
      explain:'可识别二代身份证上正反面的文字',
      action: 'idcard',
      becareful: [
        {
          id: 1,
          becarefulTitlel : '1：提供您的照片进行人脸检测和人脸分析'
        },
        {
          id: 2,
          becarefulTitlel : '2：支持图片URL，格式：JPG(JPEG)，PNG'
        },
        {
          id: 3,
          becarefulTitlel : '3：尺寸：最小48*48像素，最大4096*4096像素'
        },
        {
          id: 4,
          becarefulTitlel : '文件：最大2 MB '
        }
      ]
    },
    {
      title: '驾照识别',
      img: './../../static/img/cart.png',
      img2:"./../../static/img/drivingg@2x.png",
      explain:'可识别机动车驾驶证主页正面的文字以及驾驶证版本',
      action: 'drivinglicense',
      becareful: [
        {
          id: 1,
          becarefulTitlel : '1：提供您的照片进行人脸检测和人脸分析'
        },
        {
          id: 2,
          becarefulTitlel : '2：支持图片URL，格式：JPG(JPEG)，PNG'
        },
        {
          id: 3,
          becarefulTitlel : '3：尺寸：最小48*48像素，最大4096*4096像素'
        },
        {
          id: 4,
          becarefulTitlel : '文件：最大2 MB '
        }
      ]
    }
  ]
}
