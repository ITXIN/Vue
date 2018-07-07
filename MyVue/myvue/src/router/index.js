import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'/* 英文Hello.vue模版，并赋值给变量Hello,这里是“@”相当于“../” */
import GoodsList from '@/components/GoodsList'
import GoodsDetail from '@/components/GoodsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { 
      // path:'/list',//query
      // path: '/list/:id',//params
      path:"",
      name:"list",
      component: GoodsDetail 
    }
  ],
  
})
