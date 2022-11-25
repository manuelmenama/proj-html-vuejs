<script>

import { store } from "./assets/data/store"

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'


export default {
  name: 'AppVue',
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>

  <AppHeader />

  <AppMain />

  <AppFooter />
  
</template>

<style lang="scss">

@use './styles/general.scss';

</style>