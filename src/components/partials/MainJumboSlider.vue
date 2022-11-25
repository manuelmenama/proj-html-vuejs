<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

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
    <swiper-slide><img src="../../assets/img/course-9-f-img.jpg" alt=""></swiper-slide><swiper-slide><img src="../../assets/img/course-9-f-img.jpg" alt=""></swiper-slide
    ><swiper-slide><img src="../../assets/img/course-9-f-img.jpg" alt=""></swiper-slide>
  </swiper>

</template>


<style lang="scss" scoped>


img{
  width: 100%;
  //transform: translateY(-100px);
  filter: brightness(70%);
  object-fit: cover;
  height: 700px;
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
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active{
  border: 2px solid black;
}

</style>