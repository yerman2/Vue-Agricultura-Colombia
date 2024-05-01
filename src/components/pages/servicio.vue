<template>
  <!-- Main Content -->
	<main class="home main-layout">
		<h1>Services Page</h1>
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
  