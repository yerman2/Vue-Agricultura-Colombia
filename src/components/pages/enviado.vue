<template>
    <!-- Main Content -->
    <main class="mis-cultivos flow-intern main-layout section">
      <div class="container">
        <div class="row justify-content-center align-items-center" style="min-height: 65vh;">
          <div class="col-md-6 text-center">
            <!-- Texto -->
            <p class="mt-3 roboto-text">Genial, Se ha enviado Con Exito.</p>
  
            <!-- Tu imagen SVG local aquí -->
            <img src="@/assets/images/svg/enviado.svg" alt="Imagen SVG" class="img-fluid" style="max-width: 100%;">
  
            <!-- Botón -->
            <button class="btn btn-primary mt-3" @click="goBack">Regresar</button>
          </div>
        </div>
      </div>
    </main>
    <!-- End Main Content -->
  </template>
  
  <script>
  export default {
    methods: {
      goBack() {
        this.$router.go(-1); // Esto regresará a la página anterior
      }
    }
  }
  </script>
  
  <style scoped>
  @import "@/assets/styles/pages/404.css";
    
  </style>
  