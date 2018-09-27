<template>
    
</template>

<script>
import headTop from "../../components/header/head";
import alertTip from "../../components/common/alertTip";
import { localapi, proapi, imgBaseUrl } from "src/config/env";
import { mapState, mapMutations } from "vuex";
import {
  mobileCode,
  checkExis,
  sendLogin,
  getcaptchas,
  accountLogin
} from "../../service/getData";
export default {
  data() {
    return {
      loginWay: false, //登录方式，默认短信登录
      showPassword: false, //是否显示密码
      phoneNumber: null,
      mobileCode: null,
      validate_token: null,
      computedTime: 0,
      userInfo: null,
      userAccount: null,
      passWord: null,
      captchaCodeImg: null, //验证码地址
      codeNumber: null, //验证码
      showAler: false,
      alertText: null //提示内容
    };
  },
  created() {
    this.getCaptchaCode();
  },
  components: {
    headTop,
    alertTip
  },
  computed: {
    //判断手机号
    rightPhoneNumber: function() {
      return /^1\d{10}$/gi.test(this.phoneNumber);
    }
  },
  methods: {
    ...mapMutations(["RECORD_USERINFO"]),
    //改变登录方式
    changeLoginWay() {
      this.loginWay = !this.loginWay;
    },
    //是否显示密码
    changePassWordType() {
      this.showPassword = !this.showPassword;
    },
    //获取验证码，线上使用固定图片，生产环境使用真实验证码
    async getCaptchaCode() {
      let res = await getcaptchas();
      this.captchaCodeImg = res.code;
    },
    //获取短信验证码
    async getVerifyCode() {
      if (this.rightPhoneNumber) {
        this.computedTime = 30;
        this.timer = setInterval(() => {
          this.computedTime--;
          if (this.computedTime == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
        //判断用户是否存在
        let exsis = await checkExis(this.phoneNumber, "mobile");
        if (exsis.message) {
          this.showAler = true;
          this.alertText = exsis.message;
          return;
        } else if (!exsis.is_exists) {
          this.showAler = true;
          this.alertText = "您输入的手机号尚未绑定";
        }
        //发送短信验证码
        let res = await mobileCode(this.phoneNumber);
        if (res.message) {
          this.showAler = true;
          this.alertText = res.message;
          return;
        }
        this.validate_token = res.validate_token;
      }
    },
    //发送登录信息
    async mobileLogin() {
      if (this.loginWay) {
        if (!this.rightPhoneNumber) {
          this.showAler = true;
          this.alertText = "手机号不正确";
          return;
        } else if (!/^\d{6}$/gi.test(this.mobileCode)) {
          this.showAler = true;
          this.alertText = "手机号不正确";
          return;
        }
        //手机号登录
        this.userInfo = await sendLogin(
          this.mobileCode,
          this.phoneNumber,
          this.validate_token
        );
      } else {
        if (!this.userAccount) {
          this.showAler = true;
          this.alertText = "手机号不正确";
          return;
        } else if (!this.passWord) {
          this.showAlert = true;
          this.alertText = "请输入密码";
          return;
        } else if (!this.codeNumber) {
          this.showAlert = true;
          this.alertText = "请输入验证码";
          return;
        }
        //用户名登录
        this.userInfo = await accountLogin(this.userAccount,this.passWord,this.codeNumber);
      }

      //如果返回的值不正确，则弹出提示框，返回值正确则返回上一页
      if (!this.userInfo.user_id) {
          this.showAler = true;
          this.alertText = this.userInfo.message;
          if (!this.loginWay) {
              this.getCaptchaCode();
          }
      }else{
          this.RECORD_USERINFO(this.userInfo);
          this.$router.go(-1);
      }
    },

    closeTip(){
        this.showAlert = false;
    }
  }
};
</script>