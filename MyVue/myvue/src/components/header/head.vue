<template>
    <header id='head_top'>
        <slot name='logo'></slot>
        <slot name='search'></slot>
        
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
           
        <router-link :to="userInfo? '/profile':'/login'" v-if='signinUp' class="head_login">
            <svg class="user_avatar" v-if="userInfo">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg>
            <span class="login_span" v-else="userInfo">登录|注册</span>
        </router-link>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
       
    </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
     
    };
  },
  mounted() {
    //获取用户信息
    this.getUserInfo();
  },
  props: ["signinUp", "headTitle", "goBack"],
  computed: {
    /**
    mapState通过扩展运算符将store.state.userInfo 映射this.userInfo  这个this 很重要，
    这个映射直接映射到当前Vue的this对象上。
    所以通过this都能将这些对象点出来，同理，mapActions, mapMutations都是一样的道理。
   */
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapActions([
      // 将 `this.getUserInfo()` 映射为 `this.$store.dispatch('getUserInfo')`
      "getUserInfo"
    ])
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin";

#head_top {
  background-color: $blue;
  position: fixed;//生成绝对定位的元素，相对于浏览器窗口进行定位。可以通过设置 "left", "top", "right" 以及 "bottom" 属性给目标元素定位。
  z-index: 100;//调节层级
  left: 0;
  top: 0;
  @include wh(100%, 1.95rem);
}
.head_goback {
  left: 0.4rem;
  @include wh(0.6rem, 1rem);
  line-height: 2.2rem;
  margin-left: 0.4rem;
}
.head_login {
  right: 0.55rem;
  @include sc(0.65rem, #fff);
  @include ct;
  .login_span {
    color: #fff;
  }
  .user_avatar {
    fill: #fff;
    @include wh(0.8rem, 0.8rem);
  }
}
.title_head {
  @include center;
  width: 50%;
  color: #fff;
  text-align: center;
  .title_text {
    @include sc(0.8rem, #fff);
    text-align: center;
    font-weight: bold;
  }
}
</style>
