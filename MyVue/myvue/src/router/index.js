import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'/* 英文Hello.vue模版，并赋值给变量Hello,这里是“@”相当于“../” */
import GoodsList from '@/components/GoodsList'
import GoodsDetail from '@/components/GoodsDetail'
import App from '../App'

// import Home from '../page/home/home'
// const home = r => require.ensure([], () => r(require('../page/home/home', 'home')))
Vue.use(Router)

// export default [{
//   path: '/',
//   component: App,
//   children: [
//     {
//       path: '',
//       redirect: '/home'
//     },
//     {
//       path: '/home',
//       redirect: home
//     },
//   ]
// }]

export default new Router({
  routes: [
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home
    // },
    // { 
    //   // path:'/list',//query
    //   // path: '/list/:id',//params
    //   path:"/list",
    //   name:"list",
    //   component: GoodsDetail 
    // }
  ],

})


// export default new Router({
//   routes: [
//     {
//       path: '/HelloWorld',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     { 
//       // path:'/list',//query
//       // path: '/list/:id',//params
//       path:"/list",
//       name:"list",
//       component: GoodsDetail 
//     }
//   ],

// })
