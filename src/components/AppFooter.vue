<script>

import { store } from '../assets/data/store'

export default {
  name: 'AppFooter',
  data() {
    return {
      store
    }
  }
}
</script>

<template>

  <footer>

    <div class="container">

      <!-- componente superiore -->
      <div class="row upper-footer">
  
        <div class="col-3 my-logo-col">

          <img src="../assets/img/footer-logo-1.png" alt="iAcademy logo">

          <p>
            Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer To Home
          </p>

          <div>
            <i class="bi bi-telephone-inbound"></i>
            <span>
              {{store.contactAcademy.telephone}}
            </span>
          </div>

          <div>
            <i class="bi bi-clock"></i>
            <span>
              {{store.contactAcademy.openTime}}
            </span>
          </div>

        </div>
        <div class="col-3 my-pop-col">

          <h3>
            Popular Courses
          </h3>

          <ul>

            <li
              v-for="popCourse in store.popularCourses"
              :key="popCourse.id"
              v-show="popCourse.id<4">
              <a
                :href="popCourse.link">
                <h5>
                  <strong>
                    {{popCourse.name}}
                  </strong>
                </h5>
                <p>
                  {{popCourse.teacher.name}}
                </p>
              </a>
            </li>

          </ul>

        </div>

        <div class="col-3 my-support-col">

          <h3>
            Support
          </h3>

          <ul>

            <li
              v-for="(utilities, index) in store.supportLinks"
              :key="index">
              <a
                :href="utilities.link">
                {{utilities.name}}
              </a>
            </li>

          </ul>
          
        </div>

        <div class="col-3 my-world-col">

          <h3>
            Flexible Learning
          </h3>

          <img src="../assets/img/footer-img-1.png" alt="">
          
        </div>
        
      </div>
  
      <!-- componente inferiore -->
      <div class="row lower-footer">
  
        <div class="col-6 my-copyright-col">
          <p>
            {{store.externalInfo.copyright}}
          </p>
        </div>

        <div class="col-6 my-contact-col">

          <div>
            <p>CALL <span>{{store.externalInfo.telephone}}</span></p>
          </div>

          <div>
            <p>FOLLOW US</p>
            <ul>

              <li
                v-for="(contact, index) in store.socialContact"
                :key="index">
                <a
                  :href="contact.link">
                  <i
                    :class="contact.logoClass"></i>
                </a>
              </li>

            </ul>
          </div>

        </div>
  
      </div>

    </div>
    
  </footer>
  
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;
@use '../styles/partials/mixin' as *;


footer{
  color: $footer-text-color;
  background-color: $footer-bg-color;
  padding-top: 7rem;
  .upper-footer{
    padding-bottom: 4rem;
    div{
      h3{
        color: $footer-h-color;
        margin-bottom: 1.8rem;
      }
      ul{
        list-style: none;
        margin-left: -2rem;
        h5{
          font-size: 1.25rem;
          margin-bottom: 0.2rem;
        }
        li a{
          text-decoration: none;
          color: $footer-text-color;
        }
      }
    }
  }
  .my-logo-col{
    img{
      margin-bottom: 2rem;
      height: 27px;
    }
    p{
      margin-bottom: 2rem;
      font-size: 0.95rem;
    }
    & div:nth-child(3){
      margin-bottom: 1rem;
    }
    div{
      span{
        font-size: 0.8rem;
        margin-left: 0.8rem;
      }
    }
  }
  .my-support-col{
    ul{
      li{
        margin-bottom: 0.8rem;
      }
    }
  }
  .my-world-col{
    img{
      max-width: 100%;
    }
  }
  .lower-footer{
    padding-bottom: 1.5rem;
    &::before{
      content: '';
      width: 100%;
      border-top: 1px solid #414141;
      margin-bottom: 2rem;
    }
    color: $lowerfooter-text;
    .my-contact-col{
      @include flex('justify-end');
      
      & > div{
        @include flex('only');
        margin-left: 1.5rem;
      }
      ul{
        @include flex('only');
        list-style: none;
        margin-left: -1rem;
        li a{
          text-decoration: none;
          color: $lowerfooter-text;
          margin-left: 1.5rem;
        }
      }
    }
  }
}

</style>