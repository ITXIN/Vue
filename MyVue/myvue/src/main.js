// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',//这个app是App.vue 里面的id=app还是index.html里面多id=app  /* 定义作用范围就是index.html里的id为app的范围内 */
  router,
  components: { App },
  template: '<App/>'
})
