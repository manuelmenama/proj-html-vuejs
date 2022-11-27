<script>
export default {
  name: 'PopularSliderCard'
}
</script>

<template>

<div class="my-card">

<img src="../../assets/img/course-1-f-img.jpg" alt="">


<div class="my-ex-image">

  <div class="my-top-wrapper">
    <div class="my-text-course">
      <h5>Nome Corso</h5>
      <P>
        Lorem ipsum.
      </P>
    </div>
    <div class="my-label-course">
      <div class="my-label"><span>FREE</span></div>
    </div>
  </div>

  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nam temporibus velit veniam deserunt reprehenderit?
  </p>

  <div class="my-other-label">
    <span>
      <i class="bi bi-person-fill"></i>
      <span>number</span>
    </span>
    <span>
      <i class="bi bi-tag-fill"></i>
      <span>Name</span>
    </span>
  </div>

</div>

</div>
  
</template>


<style lang="scss" scoped>

@use '../../styles/partials/mixin' as *;
@use '../../styles/partials/variables' as *;

.my-card-wrapper{
    width: 100%;
    .my-card{
      background-color: #ffffff;
      border: 1px solid #f2f2f2;
      img{
        max-width: 100%;
      }
      h5{
        color: $subject-text-color;
        font-weight: bold;
      }
      .my-ex-image{
        padding: 1rem
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
      }
    }
  }

</style>