<script setup>
import headerContent from '../components/header.vue'
import bodyContent from '../components/body.vue'
import footerContent from '../components/footer.vue'
</script>

<template>
  <body>
    <!-- Header Inicio-->
    <headerContent/>
    <!-- Header Fin-->

    <!-- Body Inicio-->
    <bodyContent/>
    <!-- Body Fin-->

    <!-- Footer Inicio-->
    <footerContent/>
     <!-- Footer Fin-->
  </body>
</template>

<style scoped>
/* Importantado Archivo CSS - Estilos*/
@import "@/assets/styles/header.css";
@import "@/assets/styles/components/overlay.css";
@import "@/assets/styles/base/base.css";
@import "@/assets/styles/base/global.css";

</style>
