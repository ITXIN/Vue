<template>
    <div>
        <head-top signin-up='home'>
            <span slot='logo' class="head_logo"  @click="reload">ele.me</span>
        </head-top>

        <nav class="city_nav">
          <div class="city_tip">
            <span>当前定位城市：</span>
            <span>定位不准时，请在城市列表中选择</span>
          </div> 
          <router-link to=" '/city/' + guessCityid " class="guess_city">
              <span>{{guessCity}}</span>
            <svg class="arrow_right">
               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
            </router-link>
        </nav>
        
    </div>
</template>

<script>
import headTop from "../../components/header/head";
// import {cityGuess, hotcity, groupcity} from '../../service/getData'

export default {
  data() {
    return {
      guessCity: "22",
      guessCityid: "323"
      // hotcity:[],
      // groupcity:{},
    };
  },
  mounted() {
    // cityGuess().then(res=>{
    //   this.guessCity  = res.name;
    //   this.guessCityid = res.id;
    // })
  },
  components: {
    headTop
  },
  methods: {
    //点击图标刷新页面
    reload() {
      window.location.reload();
    }
  }
};
</script>


<style scoped>
/* //  @import '../../style/mixin';  */
.head_logo {
  left: 0.4rem;
  font-weight: 100;
  width: 2.3rem;
  height: 0.7rem;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* //@include 是 sass 语法， 定义的混入@mixin 使用 @include 引用
        @include sc(0.7rem, #fff);
        @include wh(2.3rem, 0.7rem);
        @include ct; */
}

.city_nav {
  padding-top: 2.35rem;
  border-top: 1px solid;
  background-color: #fff;
  margin-bottom: 0.4rem;
}

.city_tip {
  line-height: 1.45rem;
  padding: 0 0.45rem;
  display: flex;
  justify-content: space-between;
  list-style: none;

}
</style>

