<script>

import { store } from '../assets/data/store';

export default {
  name: 'AppHeader',
  data() {
    return {
      store
    }
  }
}
</script>

<template>

  <header>

    <div class="container my-container">

      <!-- container logo -->
      <div class="my-img-container">

        <img src="../assets/img/footer-logo-1.png" alt="Logo Icademi">

      </div>

      <!-- container menu -->
      <div class="d-none.md my-menu-container">

        <ul>

          <li
            v-for="(itemMenu, index) in store.menuList"
            :key="index">

            <a
              :href="itemMenu.link">
              {{itemMenu.name}}
            </a>

          </li>
          
        </ul>

      </div>

      <!-- container icone -->
      <div class="my-icon-container">

        <i class="fa-solid fa-bars"></i>
        <div class="my-bag-container">
          <i class="bi bi-bag"></i>
          <div class="my-label">
            <span>0</span>
          </div>
        </div>
        <i class="bi bi-search"></i>

      </div>

    </div>

  </header>
  
</template>

<style lang="scss" scoped>

@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

header{
  position: relative;
  z-index: 999;
}
.my-container{

  @include flex('between');
  height: 100px;

  .my-img-container{
    @include flex('center-only');
    height: 100%;
    width: 20%;
    img{
      height: 35px;
    }
    
  }
  .my-menu-container{
    height: 100%;
    width: 70%;
    text-transform: uppercase;
    ul{
      @include flex('only');
      width: 100%;
      height: 100%;
      list-style: none;
      li{
        width: calc(100% / 6);
        height: 100%;
        @include flex('center-only');
        a{
          color: $text-color-white;
          text-decoration: none;
        }
      }
      li:hover a{
          color: #40c4ff;
      }
    }
  }
  .my-icon-container{
    @include flex('center-end');
    height: 100%;
    width: 20%;
    i{
      color: $text-color-white;
      margin-left: 2rem;
      font-size: 1.2rem;
      cursor: pointer;
      transform: scaleX(-1);
      &:hover{
        color:#40c4ff
      }
    }
    .my-bag-container{
      position: relative;
      .my-label{
        position: absolute;
        top: 0;
        right: -7px;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        line-height: 18px;
        background-color: #40c4ff;
        @include flex('center-element');
        span{
          text-align: center;
          vertical-align: middle;
          font-size: 0.8rem;
          color: white;
        }
      }
    }
  }

}

</style>