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
      store
    }
  },
  methods: {
    getImagePath: function(imgPath) {
      return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
    }
  }
}
</script>

<template>

  <!-- sezione con jumbotron -->
  <section class="jumbo">

    <MainJumboSlider />
    
  </section>

  <main>

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

        <div class="my-card-wrapper">

          <div class="container">

            <MainPopularSlider />
            
          </div>

        </div>

      </section>

      <!-- sezione piani e prezzi -->
      <section>



      </section>

    </div>

    <!-- sezione famous clienti -->
    <section>



    </section>

  </main>
  
</template>

<style lang="scss" scoped>

@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

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
  border-bottom: 1px solid $cta-border;

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
  
  min-height: 600px;
  margin-bottom: 7rem;
  background-image: url(../assets/img/background-pattern.jpg);
}

.my-popular-section{

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

  

}

</style>