<script>

import MainJumboSlider from './partials/MainJumboSlider.vue';

export default {
  name: 'AppMain',
  components: {
    MainJumboSlider
  }
}
</script>

<template>

  <!-- sezione con jumbotron -->
  <section class="jumbo">

    <MainJumboSlider />
    
  </section>

  <main>
    m
    <!-- section con materie -->
    <section>



    </section>

    <!-- section con cta "the trusted name" e img -->
    <section>



    </section>

    <!-- sezione mappamondo -->
    <section>



    </section>

    <!-- sezione con istruttori -->
    <section>



    </section>

    <!-- sezione what in us for you -->
    <section>


    </section>

    <!-- sezione con immagine di background -->
    <div class="background">

      <!-- sezione corsi disponibili -->
      <section>
        


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

</style>