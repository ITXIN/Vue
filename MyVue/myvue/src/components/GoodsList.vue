<template>
    <li class="goods-list">
                <!-- params、query是什么？
        params：/router1/:id ，/router1/123，/router1/789 ,这里的id叫做params
        query：/router1?id=123 ,/router1?id=456 ,这里的id叫做query。 -->

         <!-- 只能传固定值 { 
      path: '/list',
      name:"list",
      component: GoodsDetail 
    } 接收{{$route.query.id}}-->
        <!-- <router-link to="/list?id=title" >测试</router-link> -->

        <!-- { 
        path: '/list/:id',
        name:"list",
        component: GoodsDetail 
        } 
        {{$route.params.id}}
        -->
        <!-- <router-link :to="{name:'list',params:{id:good.title}}">测试</router-link> -->
        

        <!-- <router-link  class="goods-list-link" :to="{name:'list',params:{id:good.title}}">
            <div class="goods-list-pic" >
                <img :src="good.img" alt="" >
            </div>
            <div class="goods-list-desc" >
                <p class="goods-list-name">{{good.title}}</p>
                <p class="goods-list-price">{{good.price|dTofixed|dCurrency}}</p>
            </div>
        </router-link> -->

        <input type="button" v-on:click="handlePush(good.title)" value="button" />
     </li>

</template>

<script>
    export default{
        props:['good'],
        data(){
            return{
                // title:good.title
            }
        },
        // methods: {
        // goBack () {
        //     window.history.length > 1
        //         ? this.$router.go(-1)
        //         : this.$router.push('/')
        //     }
        // },
        methods:{
            handlePush:function(title){
            this.$router.push('/');
            this.$router.push({name:'list',params: {id:title}});
            }
        }
    }
</script>

<style lang="css" scoped>
    .goods-list{
        width: 50%;
        float: left;
        box-sizing: border-box;
        margin-bottom: 0.2rem;
    }
    .goods-list:nth-of-type(odd){
        border-right: 0.15rem solid #ccc;
    }
    .goods-list:nth-of-type(even){
        border-left: 0.15rem solid #ccc;
    }
    .goods-list-link{
        display: block;
        padding: 0.5rem 0;
        margin: 0 0.3rem;
        text-align: center;
        background-color: #fff;
    }
    .goods-list:nth-of-type(even) .goods-list-link{
        margin-left: 0;
    }
    .goods-list:nth-of-type(odd) .goods-list-link{
        margin-right: 0;
    }
    .goods-list-pic{
        padding: 0.5rem;
    }
    .goods-list-pic > img{
        width: auto;
        height: 4rem;
    }
    .goods-list-desc{
        padding: 0 0.5rem;
    }
    .goods-list-desc:after {
    display: block;
    content: '';
    clear: both;
  }
  .goods-list-name,.goods-list-price {
    width: 45%;
    text-align: right;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
    color: #333;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px 0 10px;
  }
  .goods-list-price {
    color: #ff8000;
    float: right;
    text-align: left;
    padding: 0 10px 0 10px;
  }
</style>
