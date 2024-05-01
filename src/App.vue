<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/"></RouterLink>
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* Importantado Archivo CSS - Estilos*/
@import "@/assets/styles/base/base.css";
@import "@/assets/styles/base/global.css";
</style>