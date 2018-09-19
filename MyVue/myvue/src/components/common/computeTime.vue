<template>
     <div class="page">
        <span class="rem_time" style="color: orange;border-width: 1px;border-style: solid;border-color: orange;" @click="gotoPay">
	       {{remaining}}
        </span>
        <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>  
    </div>
</template>

<script>
import alertTip from "./alertTip";
export default {
  data() {
    return {
      countNum: 900,
      showAlert: false,
      alertText: null
    };
  },
  mounted() {
    this.countNum -= this.numTime;
    this.remainingTime();
  },
  props: ["timer"], //已经过的时间（秒）
  components: {
    alertTip
  },
  methods: {
    closeTip() {
      this.$emit("closeTip");
    },
    remainingTime() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.countNum--;
        if (this.countNum <= 0) {
          clearInterval(this.timer);
          this.showAlert = true;
          this.alertText = "支付超时";
        }
      }, 1000);
    },
    gotoPay() {
      this.showAlert = true;
      if (this.countNum <= 0) {
        clearInterval(this.timer);
        this.alertText = "支付超时";
      } else {
        this.alertText = "暂时不开放支付接口";
      }
    }
  },
  computed: {
    remaining: function() {
      let minute = parseInt(this.countNum / 60);
      let second = parseInt(this.countNum % 60);
      if (minute < 10) {
        minute = "0" + minute;
      }

      if (second < 10) {
        second = "0" + second;
      }

      return "去支付还剩" + minute + "分" + second + "秒";
    },
    numTime: function() {
      if (this.timer.toString().indexOf("分钟") !== -1) {
        return parseInt(this.timer) * 60;
      } else {
        return parseInt(this.timer);
      }
    }
  }
};
</script>

<style >
.page {
  display: inline-block;
}
.rem_time {
  padding: 0.1rem 0.2rem;
  border-radius: 0.15rem;
}
</style>