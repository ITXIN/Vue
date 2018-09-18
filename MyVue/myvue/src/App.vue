<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <!-- 这里是用来展示路由页面内容的，如果想用跳转就用<router-link to='xxx'></router-link> -->
    <!-- 是HelloWorld.vue的内容 -->
    <!-- <router-view/>   -->

    <GoodsList v-for="(good, index) in dataArr" :key="index" v-bind:good="good" >
    </GoodsList>  -->

    <router-link to="/HelloWorld"> HelloWord</router-link>
    <router-view></router-view>

 
<alert-tip :alertText="alertText"> </alert-tip>  
  </div>
  
</template>

<script>
import GoodsList from "@/components/GoodsList";

import alertTip from "@/components/common/alertTip";
import GoodsDetail from "@/components/GoodsDetail";

export default {
  name: "App",
  created() {
    //获取数据
    this.$http.get("/api/goods").then(data => {
      if (data.body.code == 0) {
        this.dataArr = data.body.data;
        console.log(this.dataArr);
      }
    });
  },
  components: {
    GoodsList,
    alertTip
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  data() {
    return {
      message: "app.message",
      dataArr: [],
      showAlert: true,
      alertText: "kdkfk"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
