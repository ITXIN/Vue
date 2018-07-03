// 通过 Vue.component 全局注册的：
Vue.component('button-counter',{
    data:function(){
        return {
            count:0
        }
    },
    template:'<button v-on:click="count++">You have click me {{count}} times.</button>'
})

Vue.component('blog-post', {
    props: ['id','title','subtitle'],
    template: '<h3>id:{{id}},title:{{ title }} ,sub:{{subtitle}}</h3>'
    })

Vue.component('post-blog',{
    props:['post'],
    template:'<div >\
    <h3>{{ post.title }}</h3>\
    <div v-html="post.content"></div>\
  </div>'
})
//v-on:click 不起作用。
Vue.component('emit-post',{
    props:['post'],
    template:'<div>\
    <h3>{{ post.title }}</h3>\
    <button v-on:click="$emit(\'enlarge-text\')">\
      Enlarge text\
    </button>\
  </div>'
})

Vue.component('custom-input',{
    props:['value'],
    template:'<input v-bind:value="vlaue" v-on:input="$emit(\'input\',$event.target.value)">'
})
Vue.component('alert-box',{
    template:'<div >\
    <strong>Error!</strong>\
    <slot></slot>\
  </div>'
})

Vue.component('base-checkbox',{
    model:{
        prop:'checked',
        event:'change'
    },
    props:{
        checked:Boolean
    },
    template:'<input\
    type=\"checkbox\"\
    v-bind:checked=\"checked\"\
    v-on:change="$emit(\'change\', $event.target.checked)\"\
  >'
})