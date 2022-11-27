<script>

import { store } from '../../assets/data/store'
 
import PopularSliderCard from './PopularSliderCard.vue';
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/scss";

import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  name: 'MainPopularSlider',
  components: {
    Swiper,
    SwiperSlide,
    PopularSliderCard
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>

<swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :slidesPerGroup="3"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    id="swiperId3"
  >

    <swiper-slide
      v-for="(course) in store.popularCourses"
      :key="course.id"
    >
      <PopularSliderCard :course="course" />

    </swiper-slide>
    
  </swiper>
  
</template>


<style lang="scss" scoped>

@use '../../styles/partials/mixin' as *;
@use '../../styles/partials/variables' as *;

#swiperId3 .swiper {
  width: 100%;
  height: 100%;
}

#swiperId3 .swiper-slide {
  padding: 1rem;

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

#swiperId3 .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>