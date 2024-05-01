<script setup>
import swiperComponent from '../components/structure/swiper.vue'
import gridComponent from '../components/structure/grid.vue'
</script>

<template>
  <!-- Main Content Inicio -->
  <main class="home main-layout">
    <!-- Banner Section Inicio -->
    <section>

      <!-- Swiper Inicio-->
      <swiperComponent />
      <!-- Swiper Fin-->

      <!-- Grid Inicio-->
      <gridComponent />
      <!-- Grid Fin-->
      
    </section>
    <!-- Banner Section Fin -->
  </main>
  <!-- Main Content Fin -->
</template>
  
<style scoped>
/* Importantado Archivo CSS - Estilos*/
/* @import "@/assets/styles/feature-card.css"; */
@import "@/assets/styles/components/home.css";
@import "@/assets/styles/components/main-layout.css";
</style>


  