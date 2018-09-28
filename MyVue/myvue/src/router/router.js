
import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  // 嵌套路由就是路由里面嵌套他的子路由，可以有自己的路由导航和路由容器（router-link、router-view），通过配置children可实现多层嵌套
  children: [ //二级路由。对应App.vue
      //地址为空时跳转home页面
      {
          path: '',
          redirect: '/home'
      },
      //首页城市列表页
      {
          path: '/home',
          component: home
      },
      //登录注册
      {
          path:'/login',
          component:login
      },
  ]
}]


// export default new Router({
//   routes: [
//     // {
//     //   path: '/home',
//     //   name: 'Home',
//     //   component: Home
//     // },
//     // { 
//     //   // path:'/list',//query
//     //   // path: '/list/:id',//params
//     //   path:"/list",
//     //   name:"list",
//     //   component: GoodsDetail 
//     // }
//   ],

// })


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
