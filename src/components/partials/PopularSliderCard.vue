<script>
export default {
  name: 'PopularSliderCard',
  props: {
    course: Array
  },
  methods: {
    getImagePath: function(imgPath) {
      return new URL(`../../assets/img/${imgPath}`, import.meta.url).href;
    }
  }
}
</script>

<template>

<div class="my-card">

<img :src="getImagePath(course.imagePath)" alt="">


<div class="my-ex-image">

  <div class="my-top-wrapper">
    <div class="my-text-course">
      <h5>{{course.name}}</h5>
      <P>
        {{course.teacher.name}}
      </P>
    </div>
    <div class="my-label-course">
      <div
        class="my-label"
        :class="{'my-label-price' : course.price!=='free'}"
      >
        <span>
          {{course.price}}
        </span>
      </div>
    </div>
  </div>

  <p>
    {{course.shortDescriprion}}
  </p>

  <div class="my-other-label">
    <span>
      <i class="bi bi-person-fill"></i>
      <span>{{course.numberOfStudent}}</span>
    </span>
    <span>
      <i class="bi bi-tag-fill"></i>
      <span>{{course.subject}}</span>
    </span>
  </div>

</div>

</div>
  
</template>


<style lang="scss" scoped>

@use '../../styles/partials/mixin' as *;
@use '../../styles/partials/variables' as *;


  .my-card{
    background-color: #ffffff;
    border: 1px solid #f2f2f2;
    min-height: 445px;
    img{
      max-width: 100%;
    }
    h5{
      color: $subject-text-color;
      font-weight: bold;
    }
    .my-ex-image{
      padding: 1rem;
      &>p{
        color: #808080;
      }
    }
    .my-top-wrapper{
      @include flex('only');
      justify-content: space-between;
      .my-text-course p{
        color: $whatin-text-color;
        font-size: 1rem;
        font-weight: bold;
      }
    }
    .my-label-course{
      .my-label{
        background-color: #ffd740;
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
        border-radius: 10px;
        color: #ffffff;
        font-size: 0.7rem;
        font-weight: bold;
        text-transform: uppercase;
      }
      .my-label-price{
        background-color: #40c4ff;
      }
    }
    .my-other-label{
      color: $whatin-text-color;
      &>span{
        padding-right: 1rem;
      }
      span>span{
        margin-left: 0.3rem;
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: bold;
      }
    }
  }


</style>