<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import {store} from "../../assets/data/store"

// Import Swiper styles
import "swiper/scss";

import "swiper/scss/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
  name: 'MainJumboSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      store
    }
  }
};
</script>

<template>

    <swiper
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      v-for="(title, index) in store.jumbotronCta"
      :key="index">

      
      <div class="my-jumbo-cta">
        
        <img src="../../assets/img/course-9-f-img.jpg" alt="">

        <div class="container my-box-cta">

          <div class="row">

            <div class="col-10 offset-1">

              <h1>{{title.title}}</h1>

              <p>
                {{title.description}}
              </p>

              <a href="#" class="my-a-button">
                REGISTER NOW
              </a>

            </div>

          </div>


        </div>

      </div>
      
    </swiper-slide>

  </swiper>

</template>


<style lang="scss" scoped>


img{
  width: 100%;
  filter: brightness(70%);
  object-fit: cover;
  height: 700px;
}

.my-jumbo-cta{
    position: relative;
    width: 100%;
    .my-box-cta{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;

      h1{
        font-size: 5rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
      }

      p{
        margin-bottom: 2.5rem;
      }

      .my-a-button{
        width: 200px;
        height: 60px;
        line-height: 60px;
      }
    }
  }



.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active{
  border: 2px solid black;
}

</style>