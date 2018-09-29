<template>
    <div>
        <head-top signin-up="msite">
            <router-link :to="'/search/geohash'" class="link_search" slot="search">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <circle cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none"/>
	    			<line x1="14" y1="14" x2="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2"/>
                </svg>
            </router-link>
            <router-link :to="'/home'" slot="msite-title" class="msite_title">
                <span class="title_text ellipsis">{{msiteTitle}}</span>
            </router-link>
        </head-top>

        <nav class="msite_nav">
            <!-- <div class="swiper-container" v-if="foodTypes.length">
                <div class="swiper-wrapper">
                    <div class="swiper-slide food_types_container" v-for="(item,index) in foodTypes" :key="index">
                        <router-link :to="{path:'/food', query:{geohash,title:foodItem.title,restaurant_category_id:getCategoryId(foodItem.link)}}" v-for="foodItem in item" :key="foodItem.id" class="link_to_food">
                            <figure>
                                <img src="imgBaseUrl + foodItem.image_url" alt="">
                                <figcaption>{{foodItem.title}}</figcaption>
                            </figure>
                        </router-link>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div> -->
            <!-- <img src="../../images/fl.svg" class="fl_back animation_opactiy" v-else alt=""> -->
        </nav>

        <div class="shop_list_container">
            <header >

            </header>
        </div>

        <foot-guide></foot-guide>

    </div>
</template>

<script>
import { mapMutations } from "vuex";
import headTop from "../../components/header/head";
import footGuide from "../../components/footer/footGuide";
import { cityGuess, msiteAddress, msiteFoodTypes } from "../../service/getData";

export default {
  data() {
    return {
      msiteTitle: "请选择地址...",
      foodTypes: [],
      geohash: "",
      hasGetData: false,
      imgBaseUrl: "https://fuss10.elemecdn.com" //图片域名地址
    };
  },
  async beforeMount() {
    if (!this.$route.query.geohash) {
      const address = await cityGuess();
      this.geohash = address.latitude + "," + address.longitude;

      console.log("address", address);
    } else {
      this.geohash = this.$route.query.geohash;
      console.log("geohash", this.geohash);
    }
    this.SAVE_GEOHASH(this.geohash);
    let res = await msiteAddress(this.geohash);
    console.log("当前地址", res);
    this.msiteTitle = res.name;
  },
  mounted() {},
  components: {
    headTop,
    footGuide
  },
  computed: {},
  methods: {
    ...mapMutations(["RECORD_ADDRESS", "SAVE_GEOHASH"])
  }
};
</script>

<style>
</style>
