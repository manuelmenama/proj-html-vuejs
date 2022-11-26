<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import {store} from "../../assets/data/store";


// Import Swiper styles
import "swiper/scss";

import "swiper/scss/pagination";


// import required modules
import { Pagination } from "swiper";


export default {
  name: 'MainTeacherSlider',
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
  },
  methods: {
    getImagePath: function(imgPath) {
      return new URL(`../../assets/img/${imgPath}`, import.meta.url).href;
    }
  }
}
</script>

<template>

  <swiper
    :pagination="true"
    :modules="modules"
    class="mySwiper"
    id="swiperid2">

    <swiper-slide
      v-for="(teacher, index) in store.popularCourses"
      :key="index"
      v-show="index<3">
      
      <div class="container my-teacher-container">

        <div class="row">

          <div class="col-10 offset-1 my-portrait-container">
            
            <div class="my-teacher-img">

              <img :src="getImagePath(teacher.teacher.portraitPath)" alt="teacher.teacher.name">

            </div>

            <p>
              "{{teacher.teacher.teacherDescription}}"
            </p>

            <h4>{{teacher.teacher.name}}</h4>

            <p>{{teacher.teacher.work}}</p>

          </div>

        </div>

      </div>

    </swiper-slide>

  </swiper>
  
</template>


<style lang="scss" scoped>

@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixin' as *;

.my-teacher-container{

  .my-portrait-container{
    @include flex('center-element');
    flex-direction: column;
  }
  .my-teacher-img{
    height: 125px;
    width: 125px;
    overflow: hidden;
    margin-bottom: 2rem;
    img{
      border-radius: 50%;
      object-fit: cover;
    }
  }
  h4,
  p{
    color: $text-color-white;
  }
  p:nth-child(2){
    margin-bottom: 2rem;
  }
  p:nth-child(4){
    font-size: 0.95rem;
    font-weight: bold;
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #ffffff00;

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

</style>