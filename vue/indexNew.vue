<template>

  <div class="modal" v-show="showValue">

    <div class="modal-dialog">

      <div class="modal-content">

           <div class="modal-body">

                    <p class="infoText">你尚未绑定信用卡请先绑定。如您尚未持有我行信用卡，点击按钮立即申请！</p>

           </div>

           <div class="modal-footer vertical">
                           <a class="confirm text-orange" @click="_onCard">我要办卡</a>

          <a class="confirm text-orange" @click="_onBindCard">立即绑定</a>

          <a class="cancel" @click="_onCancel">取消</a>

                  </div>

         </div>

    </div>

  </div>

</template>

 

<script>

import WebUrls from '../../common/constants/WebUrls'

import ContextConst from '../../common/constants/ContextConst'

import Navigator from '../../common/navigator'

 
//export default是ES6的语法，意思是将这个东西导出，你要import 引入东西，导出了才能引用
export default {

  props: {

//带有默认值
    value: {

      type: Boolean,

      default: false

    },
//布尔类型
    isBackTop: Boolean

  },
// "发生在Vue实例初始化以及data observer和event/watcher事件被配置之后",
  created () {

    if (typeof this.value !== 'undefined') {

      this.showValue = this.value

    }

  },
// "Vue实例化时会调用$watch()方法遍历watch对象的每个属性",
  watch: {

    value (val) {

      this.showValue = val

    },

    showValue (val) {

      this.$emit(val ? 'on-show' : 'on-hide')

      this.$emit('input', val)

    }

  },
// 一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：
  data () {

    return {

      showValue: false

    }

  },

  methods: {

    _onCancel () {

      this.showValue = false

      this.$store.commit('updateShowConfirm', false)

//      if (!this.isBackTop) {

//        let bow = window.aladdin

//        bow.navigator && bow.navigator.back()

//      }

    },

    _onCard () {

      this.showValue = false
//Vuex是专门为Vue应用程序提供的状态管理模式，每个Vuex应用的核心是store（仓库），即装载应用程序state（状态）的容器，每个应用通常只拥有一个store实例。
      this.$store.commit('updateShowConfirm', false)

      if (this.isBackTop) {

        Navigator.forward('https://br.pingan.com/t/Adehcdyd')

      } else {

        window.location.replace('https://br.pingan.com/t/Adehcdyd')

      }

    },

    _onBindCard () {

      this.showValue = false

      this.$store.commit('updateShowConfirm', false)

      if (this.isBackTop) {

        Navigator.forward(ContextConst.CMS_URL + WebUrls.BIND_CARD + '?backTop=1')

      } else {

        window.location.replace(ContextConst.CMS_URL + WebUrls.BIND_CARD + '?callback=' + window.location.href)

      }

    }

  }

}

</script>

 

<style scoped>

  .modal {

    position: fixed;

    top: 0;

    right: 0;

    bottom: 0;

    left: 0;

    z-index: 10000;

    overflow: hidden;

    -webkit-overflow-scrolling: touch;

    outline: 0;

    font-size: 0.248rem;

    background-color: rgba(0,0,0,0.5);

  }

  .modal-dialog {

    position: absolute;

    width: 100%;

    top: 30%;

  }

  .modal-content {

    position: relative;

    width: 78%;

    margin: 0 auto;

    background-color: #fff;

    -webkit-background-clip: padding-box;

    background-clip: padding-box;

    border-radius: 0.09rem;

    outline: 0;

    color: #6c7684;

  }

  .modal-title {

    margin: 0;

    line-height: 1.42857143;

  }

  .modal-body {

    position: relative;

    padding: 0.529rem 0.72rem;

  }

  .modal-body .infoText {

    line-height: 0.405rem;

  }

  .modal-footer .cancel{

    position: relative;

    color: #6c7684;

  }

  .cancel:after{

    content: '';

    position: absolute;

    top: 0;

    right: 0;

    width: 1px;

    height: 100%;

    background: #e2e2e2;

    -webkit-transform: scaleX(.5);

    transform: scaleX(.5);

    -webkit-transform-origin: 100% 0;

    transform-origin: 100% 0;

  }

  .modal-footer .confirm {

    padding: 0.27rem;

  }

  .modal .modal-footer .confirm {

    font-size: 0.315rem;

  }

  .modal-footer .cancel,.modal-footer .confirm {

    display: inline-block;

    font-size: 0.315rem;

    text-align: center;

    padding: 0.225rem;

  }

  .modal-footer {

    padding: 0;

    overflow: hidden;

  }

  .modal-footer a {

    position: relative;

    float: left;

    width: 50%;

    box-sizing: border-box;

  }

  .modal-footer a:before{

    content: '';

    position: absolute;

    top: 0;

    left: 0;

    width: 100%;

    height: 1px;

    background: #e2e2e2;

    -webkit-transform: scaleY(.5);

    transform: scaleY(.5);

    -webkit-transform-origin: 0 100%;

    transform-origin: 0 100%;

  }

  .modal-footer.vertical a{

    width: 100%;

  }

  .modal-body .infoText{

    font-size: 0.293rem;

  }

  .modal-footer .text-orange {

    color: #f37938;

  }

</style>

