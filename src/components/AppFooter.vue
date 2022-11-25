<script>
export default {
  name: 'AppFooter'
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
              1-677 - inserirlo dinamico
            </span>
          </div>

          <div>
            <i class="bi bi-clock"></i>
            <span>
              orario dinamico
            </span>
          </div>

        </div>
        <div class="col-3 my-pop-col">

          <h3>
            Popular Courses
          </h3>

          <ul>
            <li>
              <a href="#">
                <h5>
                  <strong>
                    Name Course
                  </strong>
                </h5>
                <p>
                  <strong>
                    Teacher Name
                  </strong>
                </p>
              </a>
            </li>
          </ul>

        </div>
        <div class="col-3 my-support-col">

          <h3>
            Support
          </h3>
          
        </div>
        <div class="col-3 my-world-col">

          <h3>
            Flexible Learning
          </h3>
          
        </div>
        
      </div>
  
      <!-- componente inferiore -->
      <div class="row lower-footer">
  
        but
  
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
      ul{
        list-style: none;
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
      height: 30px;
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
}

</style>