<script setup>
import headerContent from '../components/header.vue'
import bodyContent from '../components/pages/contacto.vue'
import footerContent from '../components/footer.vue'
</script>

<template>
  <body>
    <!-- Header Inicio-->
     <!-- |- Header de la Página -| -->
    <headerContent/>
    <!-- Header Fin-->

    <!-- Body Inicio-->
    <!-- |- Contenido de la Página -| -->
    <bodyContent/>
    <!-- Body Fin-->

    <!-- Footer Inicio-->
    <!-- |- Footer de la Página -| -->
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
