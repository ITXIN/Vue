// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import VueResource from 'vue-resource'
import {routerMode} from './config/env'

Vue.use(VueResource)
Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {//返回希望滚动到哪个的位置
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',//这个app是App.vue 里面的id=app还是index.html里面多id=app  /* 定义作用范围就是index.html里的id为app的范围内 */
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
	el:"#app",
	router,
	store, 
}).$mount('#app')
