<script>

import MainJumboSlider from './partials/MainJumboSlider.vue';
import MainTeacherSlider from './partials/MainTeacherSlider.vue';
import MainPopularSlider from './partials/MainPopularSlider.vue';

import { store } from '../assets/data/store';

export default {
  name: 'AppMain',
  components: {
    MainJumboSlider,
    MainTeacherSlider,
    MainPopularSlider
  },
  data() {
    return {
      store,
      isScrolling: false
    }
  },
  methods: {
    getImagePath: function(imgPath) {
      return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
    },
    handleScroll() {
      // Any code to be executed when the window is scrolled
      this.isScrolling=true;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<template>

  <!-- sezione con jumbotron -->
  <section class="jumbo">

    <MainJumboSlider />
    
  </section>

  <main>

    <div
      class="follow-up"
      @scroll="handleScroll()"
      v-show="isScrolling===true">
      <a href="#">
        <i class="bi bi-chevron-up"></i>
        <p>TOP</p>
      </a>
    </div>

    <!-- section con materie -->
    <section class="container my-subject-container">
      
      <div class="row">

        <div
          class="col-2"
          v-for="(subject, index) in store.subjects"
          :key="index">

          <div class="my-subject-card">

            <img :src="getImagePath(subject.logoPath)" :alt="subject.name">
            <h4>{{subject.name}}</h4>

          </div>

        </div>

      </div>

    </section>

    <!-- section con cta "the trusted name" e img -->
    <section class="my-cta-container">

      <div class="container">

        <div class="row">
  
          <div class="col-6">
  
            <h2>
              <div>
                The Trusted Name 
              </div>
              for In-Home Tutoring.
            </h2>
  
          </div>
  
        </div>
        <div class="col-12">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta molestias quisquam atque cumque ea eveniet inventore ipsam dolorem molestiae rem, quaerat, velit dolore reiciendis? Non rem quae corporis recusandae nam?</p>
    
          <a href="#">
            <strong>
              LEARN MORE
            </strong>
          </a>
        </div>
  
        <img src="../assets/img/h5-img-1.jpg" alt="">
      
      </div>
      
    </section>

    <!-- sezione mappamondo -->
    <section class="my-container-world">

      <div class="container">

        <div class="row">

          <div class="col-6">

            <img src="../assets/img/h5-img-2.jpg" alt="">
            
          </div>

          <div class="col-6 my-world-col">

            <h2>Empowering Children to Reach Their Potential.</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta hic fugit architecto itaque consequuntur tempore rerum maxime ea nesciunt commodi, praesentium.
            </p>

            <div class="container my-our-number-container">
              <div class="row">

                <div
                  class="col-6"
                  v-for="(type, index) in store.ourNumber"
                  :key="index">
                  <a href="#">

                    <h2>{{type.number}}</h2>

                    <h5>{{type.name}}</h5>

                  </a>
                </div>
                
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>

    <!-- sezione con istruttori -->
    <section class="my-istructor-container">

      <MainTeacherSlider />

    </section>

    <!-- sezione what in us for you -->
    <section class="my-what-in-container">

      <div class="container">

        <div class="row">

          <div class="col-4">

            <ul class="list-group rounded-0 my-ul-group">

              <li
                class="list-group-item rounded-0 my-li-item"
                v-for="(element, index) in store.whatIn"
                :key="index"
                :class="{'my-li-item-active': store.whatInCounter === index}"
                @click="store.whatInCounter=index"><h6>{{element.question}}</h6></li>
              
            </ul>

          </div>

          <div class="col-8">

            <div class="container">

              <div class="row">

                <div class="col-12 pt-3">

                  <h2>
                    {{store.whatIn[store.whatInCounter].answer}}
                  </h2>

                  <p>
                    {{store.whatIn[store.whatInCounter].longAnswer}}
                  </p>

                </div>

                <div class="col-9 my-personal-list">
                  
                  <ul>

                    <li v-for="(liElement, index) in store.whatIn[store.whatInCounter].powerPoint"
                      :key="index">

                      <p><i class="fa-solid fa-check"></i> {{liElement}}</p>

                    </li>
                    

                  </ul>
                  
                </div>

                <div class="col-3 align-self-end my-mini-icon">

                  <img :src="getImagePath(store.whatIn[store.whatInCounter].logoPath)" alt="">

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

    <!-- sezione con immagine di background -->
    <div class="my-background">

      <!-- sezione corsi disponibili -->
      <section class="my-popular-section">
        
        <div class="container">

          <div class="row">

            <div class="col-10 offset-1 text-center my-popular-title">

              <h2>
                Popular Courses
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum placeat quaerat quam distinctio in, earum reiciendis eligendi hic deleniti sed recusandae reprehenderit natus voluptate, dolorem exercitationem dicta dolore. Maxime.
              </p>

            </div>

          </div>

        </div>

        <div class="container my-wrapper-popular">

          <MainPopularSlider />
          
        </div>

      </section>

      <!-- sezione piani e prezzi -->
      <section class="my-pricing-section">

        <div class="my-shop-option">
          <div class="my-box my-refresh">
            <img src="../assets/img/svg-3.svg" alt="">
          </div>
          <div class="my-box my-basket">
            <img src="../assets/img/svg-2.svg" alt="">

          </div>
        </div>

        <div class="container my-pricing-table">

          <div class="row">

            <div class="col-10 offset-1 text-center my-pricing-title">

              <h2>
                Pricing Plans
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa, omnis vel eius placeat.
              </p>

            </div>


          </div>

          <table class="table table-bordered my-hide" id="myTable">
            <thead>
              <tr>
                <th scope="col" class="my-title">
                  <h4>Save up to 40% by paying weekly</h4>
                </th>
                <th
                  scope="col"
                  class="my-first-plan"
                  v-for="(element, index) in store.paymentPlans"
                  :key="index"
                  @click="store.pricingPlanCounter=index"
                  :class="{'my-top-active':store.pricingPlanCounter===index}">

                  <img :src="getImagePath(element.imagePath)" :alt="element.type">

                  <h5>{{element.type}}</h5>
                  <p>{{element.price}}</p>

                </th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <h6>Number of Courses</h6>
                </th>
                <td v-for="(element, index) in store.paymentPlans"
                :key="index">
                  {{element.numberOfCourses}}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <h6>Time</h6>
                </th>
                <td v-for="(element, index) in store.paymentPlans"
                :key="index">
                  {{element.duration}}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <h6>Web Designing</h6>
                </th>
                <td v-for="(element, index) in store.paymentPlans"
                :key="index">
                  
                  <i class="bi"
                    :class="[(element.coursesIncluded.webDesigning)?'bi-check-lg':'bi-x-lg']"></i>
                  
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <h6>Human-Centered Degnin</h6>
                </th>
                <td v-for="(element, index) in store.paymentPlans"
                :key="index">
                  
                  <i class="bi"
                    :class="[(element.coursesIncluded.humanCenteredDesign)?'bi-check-lg':'bi-x-lg']"></i>
                  
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <h6>Basic Marketing</h6>
                </th>
                <td v-for="(element, index) in store.paymentPlans"
                :key="index">
                  
                  <i class="bi"
                    :class="[(element.coursesIncluded.basicMarketing)?'bi-check-lg':'bi-x-lg']"></i>
                  
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <h6>Pyton for Everybody</h6>
                </th>
                <td v-for="(element, index) in store.paymentPlans"
                :key="index">
                  
                  <i class="bi"
                    :class="[(element.coursesIncluded.pytonForEverybody)?'bi-check-lg':'bi-x-lg']"></i>
                  
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <h6>Android Developer</h6>
                </th>
                <td v-for="(element, index) in store.paymentPlans"
                :key="index">
                  
                  <i class="bi"
                    :class="[(element.coursesIncluded.androidDeveloper)?'bi-check-lg':'bi-x-lg']"></i>
                  
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <h6>Business English</h6>
                </th>
                <td v-for="(element, index) in store.paymentPlans"
                :key="index">
                  
                  <i class="bi"
                    :class="[(element.coursesIncluded.businessEnglish)?'bi-check-lg':'bi-x-lg']"></i>
                  
                </td>
              </tr>
              <tr>
                <th class="my-empty-cell">
                  <div class="my-div-cover"></div>
                </th>
                <td
                  v-for="(element, index) in store.paymentPlans"
                  :key="index"
                  @click="store.pricingPlanCounter=index"
                  class="my-btn-container">
                  <a
                    :class="{'my-a-button-active':store.pricingPlanCounter===index}"
                    :href="element.link"
                    class="my-a-button">GET IT NOW</a>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

      </section>

    </div>

    <!-- sezione famous clienti -->
    <section>

      <div class="container my-famous-client">

        <div class="row">

          <div
            class="col-3 my-img-client"
            v-for="(element, index) in store.famousClient"
            :key="index">

            <a :href="element.link">

              <img :src="getImagePath(element.logoPath)" :alt="element.name">

            </a>

          </div>
          
        </div>

      </div>

    </section>

  </main>
  
</template>

<style lang="scss" scoped>

@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

main{
  //elemento per tornare in cima
  position: relative;
  .follow-up{
    padding-top: 0.5rem;
    position: fixed;
    bottom: 0vh;
    right: 0vw;
    height: 60px;
    width: 60px;
    background-color: #40c4ff;
    @include flex('center-element');
    flex-direction: column;
    text-align: center;
    a{
      text-decoration: none;
      color: white;
    }
    i{
      font-size: 1.5rem;
      font-weight: bold;
    }
    p{
      font-weight: bold;
    }
  }
}

.jumbo{
  width: 100%;
  text-align: center;
  transform: translateY(-100px);
  color: $text-color-white;
}
.my-subject-container{
  margin-bottom: 7rem;
}
.my-subject-card{
  height: 250px;
  background-color: $subject-bg-color;
  @include flex('center-element');
  flex-direction: column;
  cursor: pointer;
  &:hover{
    filter: brightness(101.5%);
  }
  img{
    margin-bottom: 3rem;
  }
  h4{
    font-weight: bold;
    color: $subject-text-color;
  }
}

.my-cta-container{
  border-bottom: 1px solid $cta-border;
  margin-bottom: 7rem;
  h2{
    font-size: 2.6rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  p{
    color: $cta-text-color;
    font-size: 1.2rem;
    font-weight: lighter;
    margin-bottom: 1.5rem;

  }
  a{
    text-decoration: none;
    color: $cta-link-color;
    font-size: 0.95rem;
  }
}

.my-container-world{
  margin-bottom: 7rem;

  .my-world-col{
    padding-right: 8rem;
    padding-left: 2rem;
  }
  
  img{
    max-width: 100%;
  }
  h2{
    font-size: 2.6rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  p{
    color: $cta-text-color;
    font-size: 1.2rem;
    font-weight: lighter;
    margin-bottom: 1.5rem;

  }
}
.my-our-number-container{
  h2,
  h5{
    color: $cta-link-color;
    font-weight: bold;
  }
  h2{
    margin-bottom: 0.5rem;
    font-size: 3.5rem;
  }
  a{
    text-decoration: none;
  }
}

.my-istructor-container{
  background-image: url('../assets/img/h5-parallax-img-1.png');
  height: 650px;
  margin-bottom: 7rem;
  background-position: center top;
}

.my-what-in-container{
  margin-bottom: 2rem;
  padding-bottom: 7rem;
  

  h2{
    margin-bottom: 2rem;
  }

  p{
    color: $whatin-text-color;
    font-size: 1.2rem;
  }

  .my-mini-icon img{
    max-width: 75%;
  }

  .my-ul-group{
    height: 100%;
    h6{
      color: #847b7b;
      font-weight: bold;
      line-height: 100%;
    }
  }
  .my-li-item{
    padding: 2rem;
    height: 100%;
    display: inline-block;
    &.my-li-item-active{
      background-color: $whatin-active-color;
      border-left: 8px solid $whatin-active-border;
      padding-left: calc(2rem - 7px);
    }
  }

  .my-personal-list{
    ul{
      margin-top: 1rem;
      li{
        margin-left: -2rem;
        margin-bottom: 3rem;
        i{
          color: $whatin-active-border;
          display: inline-block;
          transform: scaleX(.7);
        }
      }
      list-style: none;
    }
  }
}

.my-background{
  border-top: 1px solid $cta-border;
  border-bottom: 1px solid $cta-border;
  padding-top: 5rem;
  min-height: 700px;
  background-image: url(../assets/img/background-pattern.jpg);
  
}

.my-popular-section{

  margin-bottom: 7rem;
  padding-bottom: 7rem;
  border-bottom: 1px solid $cta-border;

  .my-popular-title{
    margin-bottom: 5rem;
  }

  h2{
    margin-bottom: 2rem;
  }

  p{
    font-size: 1.2rem;
    color: $cta-text-color;
  }

  .my-wrapper-popular{
    margin-bottom: 2rem;
  }

  
}

//sezione tabbella pricing
.my-pricing-section{
  position: relative;
  .my-shop-option{
    position: absolute;
    right: 0;
    top: 195px;
    img{
      max-width: 80%;
    }
    .my-box{
      height: 50px;
      width: 50px;
      background-color: white;
      box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.151);
      margin-bottom: 5px;
      cursor: pointer;
      @include flex('center-element');

      &.my-refresh{
        background-color: #ee2852;
      }
      &.my-refresh img{
        
        filter: grayscale(100%);
        filter: brightness(1000%);
      }
      &.my-basket img{
        max-width: 40%;
      }
    }
  }
}
.my-pricing-table{
  margin-bottom: 7rem;
  .my-pricing-title{
    margin-bottom: 4rem;
    h2{
      margin-bottom: 2rem;
    }
    p{
      color: #595959;
      font-size: 1.2rem;
    }
    
  }
  #myTable { 
    position: relative;
    thead th{
      height: 100px;
      background-color: $subject-bg-color;
      text-align: center;
      padding: 2rem 0;
      border-top: 5px solid #d6f2ff;
      &.my-top-active{
        border-top: 5px solid #40c4ff;
      }
      img{
        margin-bottom: 2rem;
      }
      h5{
        margin-bottom: 1rem;
        color: #3e3e3e;
        font-weight: bold;
      }
      p{
        color: #3e3e3e;
        font-size: 1.2rem;
      }
    }
    thead .my-title{
      background-color: rgba(255, 255, 255);
      padding-bottom: 1.5rem;
      padding-left: 2rem;
      padding-right: 3rem;
      h4{
        font-weight: bolder;
        text-align:left;
      }
    }
    th{
      width: calc(100% / 4);
      height: 75px;
    }
    tbody th,
    tbody td{
      background-color: white;
      

    }
    tbody tr th{
      vertical-align: middle;
      padding-left: 2rem;
      h6{
        color: #808080;
        font-weight: bold;
      }
    }
    tbody tr td.my-btn-container{
      background-color: $subject-bg-color;
      padding: 2rem 0;
    }
    tbody td{
      text-align: center;
      vertical-align: middle;
      font-size: 1.2rem;
      color: #808080;
      i.bi-check-lg{
        display: inline-block;
        font-size: 2rem;
        transform: scaleX(.7);
        color: #40c4ff;
      }
      
      .my-a-button{
        height: 50px;
        line-height: 50px;
        padding: 0 1rem;
        background-color: white;
        color: #808080;
        border: 2px solid #eaebeb;
        font-size: 1rem;
        font-weight: bold;
      }
      .my-a-button-active{
        background-color: #40c4ff;
        border: 2px solid #40c4ff;
        color: white;
      }
    }
    .my-div-cover{
      height: 115px;
      width: 25%;
      bottom: 0;
      left: -1px;
      background-color: white;
      position: absolute;
      z-index: 999;
    }
  }
}

.my-famous-client{
  height: 200px;
  @include flex('center-element');
  .my-img-client{
    @include flex('center-element');
    a:hover img{
      filter: brightness(180%);
    }
  }
}

</style>