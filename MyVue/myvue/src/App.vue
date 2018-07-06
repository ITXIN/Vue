<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 这里是用来展示路由页面内容的，如果想用跳转就用<router-link to='xxx'></router-link> -->
    <!-- 是HelloWorld.vue的内容 -->
    <!-- <router-view/>   -->

    <!-- <h1>App.vue</h1>
    <p>{{message}}</p>
    <input type="text" v-model="message" />
    <ul>
      <li v-for="person in people" style="margin:10px">
        name:{{ person.name }},age:{{person.age}},sex:{{person.sex}}
      </li>
    </ul> -->
      <!-- <h1>商品展示</h1> 
      <div v-for="(good, index) in dataArr" :key="index" style="margin:10px,">
        <div style="float:left">
          <img :src="good.img" width="100px" height="100px">
          <p style="background:white;margin:10px">价格:{{ good.price }},商品名:{{good.title}},编号:000{{index}}</p>
      </div>
     </div> -->
     

    <GoodsList v-for="(good, index) in dataArr" :key="index" v-bind:good="good" >
    </GoodsList> 

    <router-link to="/HelloWorld"> HelloWord</router-link>
    <!-- <router-link to="/GoodsList"> GoodsList</router-link> -->
    <router-view></router-view>

  </div>
  
</template>

<script>
import GoodsList from '@/components/GoodsList'
export default {
  name: 'App',
  created() {
    this.$http.get('/api/goods').then((data) => {
      if(data.body.code == 0){
        this.dataArr = data.body.data;
        console.log(this.dataArr)
      }
    })
  },
  components:{
      GoodsList
  },
  //  methods: {
  //   goBack () {
  //       window.history.length > 1
  //           ? this.$router.go(-1)
  //           : this.$router.push('/')
  //       }
  //   },
  data(){
    return{
      message:"app.message",
      dataArr:[],
      people: [{
                    name: 'Jack',
                    age: 30,
                    sex: 'Male'
                }, {
                    name: 'Bill',
                    age: 26,
                    sex: 'Male'
                }, {
                    name: 'Tracy',
                    age: 22,
                    sex: 'Female'
                }, {
                    name: 'Chris',
                    age: 36,
                    sex: 'Male'
                }],
     
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
