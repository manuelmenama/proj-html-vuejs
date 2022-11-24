<script>
export default {
  name: 'AppHeader'
}
</script>

<template>

  <header class="debug">

    <div class="container my-container">

      <!-- container logo -->
      <div class="my-img-container">

        <img src="../assets/img/footer-logo-1.png" alt="Logo Icademi">

      </div>

      <!-- container menu -->
      <div class="my-menu-container">

        <ul>

          <li>

            <a href="#">link</a>

          </li>
          <li>

            <a href="#">link</a>

          </li>
          <li>

            <a href="#">link</a>

          </li>
          <li>

            <a href="#">link</a>

          </li>
          <li>

            <a href="#">link</a>

          </li>
          <li>

            <a href="#">link</a>

          </li>
          
        </ul>

      </div>

      <!-- container icone -->
      <div class="my-icon-container">

        <i class="bi bi-list"></i>
        <i class="bi bi-bag"></i>
        <i class="bi bi-search"></i>

      </div>

    </div>

  </header>
  
</template>

<style lang="scss" scoped>

@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.my-container{

  @include flex('between');
  height: 100px;

  .my-img-container{
    @include flex('center-only');
    height: 100%;
    width: 20%;
  }
  .my-menu-container{
    height: 100%;
    width: 70%;
    ul{
      @include flex('only');
      width: 100%;
      height: 100%;
      list-style: none;
      li{
        width: calc(100% / 6);
        height: 100%;
        @include flex('center-element');
        a{
          text-decoration: none;
        }
      }
    }
  }
  .my-icon-container{
    @include flex('center-end');
    height: 100%;
    width: 10%;
    i{
      margin-left: 2rem;
      font-size: 1.2rem;
      .bi-search{
        display: inline-block;
        transform: scaleX(-1);
      }
    }
  }

}

</style>