<template>
  <div class="goods-detail">
    <h1>GoodsDetail.vue{{$route.params.title}}</h1>
    <p>{{message}}</p>
    <input type="text" v-model="message" />
    <ul>
      <li v-for="person in people" style="margin:10px">
        name:{{ person.name }},age:{{person.age}},sex:{{person.sex}}
      </li>
    </ul>
  </div>
  
</template>

<script>

export default {
  name: 'GoodsDetail',
  created() {
  },
  components:{
      
  },
  data(){
    return{
      message:"app.message",
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
