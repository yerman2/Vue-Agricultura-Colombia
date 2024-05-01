<script setup>
import headComponent from '../components/structure/head.vue'
import nabvarComponent from '../components/structure/navbar.vue'
import menuComponent from '../components/structure/menu.vue'
</script>

<template>
	<header class="header">
		<!-- Head Inicio-->
		<!-- |-Imagenes Superiores-| -->
		<headComponent />
		<!-- Head Fin-->

		<!-- Navbar Inicio-->
		<!-- |-Navbar Menú-| -->
		<nabvarComponent />
		<!-- Navbar Fin-->

		<!-- Navbar Inicio-->
		<!-- |-Menú de Navegación-| -->
		<menuComponent />
		<!-- Navbar Fin-->

		<!-- Overlay -->
		<div class="overlay"></div>
		<!-- End Overlay -->
	</header>
</template>
<style scoped>
/* Importantado Archivo CSS - Estilos*/
@import "@/assets/styles/header.css";
@import "@/assets/styles/components/overlay.css";

</style>