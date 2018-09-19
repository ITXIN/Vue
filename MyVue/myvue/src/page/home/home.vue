<template>
    <div>
        <head-top signin-up='home'>
            <span slot='logo' class="head_logo"  @click="reload">ele.me</span>
        </head-top>
    </div>
</template>

<script>
import headTop from "../../components/header/head";

export default {
  data() {
    return {
      // guessCity:'',
      // guessCityid:'',
      // hotcity:[],
      // groupcity:{},
    };
  },
  mounted() {
    // cityGuess().then
  },
  components: {
    headTop
  },
  methods: {
    //点击图标刷新页面
    reload() {
      window.location.reload();
    }
  },
}
</script>


<style  scoped>
/* @import '../../style/mixin'; */
.head_logo {
  left: 0.4rem;
  font-weight: 400;
  width: 2.3rem;
  height: 0.7rem;
  /* //@include 是 sass 语法， 定义的混入@mixin 使用 @include 引用
        @include sc(0.7rem, #fff);
        @include wh(2.3rem, 0.7rem);
        @include ct; */
}
</style>

