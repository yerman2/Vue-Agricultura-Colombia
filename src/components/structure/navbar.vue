<template>
	<!-- Nav Menú -->
	<nav class="nav">
		<!-- NavList Menú Desktop -->
		<ul class="nav__list">
			<!-- Menú Inicio Inicio -->
			<li class="nav__item"><router-link to="/" class="nav__link nav-link nav-link active">Inicio</router-link></li>
			<!-- Menú Inicio Fin -->
			
			<!-- Menú Inicio Ingreso -->
			<li class="nav__item"><router-link to="/enter-page" class="nav__link nav-link">Ingreso</router-link></li>
			<!-- Menú Ingreso Fin -->

			<!-- Menú  Contacto Inicio  -->
			<li class="nav__item"><router-link to="/contact-page" class="nav__link nav-link">Contacto</router-link></li>
			<!-- Menú Contacto Fin -->

			<!-- Menú Inicio Participantes -->
			<li class="nav__item"><router-link to="/no-encontrado" class="nav__link nav-link">Participantes</router-link></li>
			<!-- Menú Participantes Fin -->

			<!-- Menú Servicios Inicio -->
			<li class="nav__item">
					<p class="nav__link nav-link" style="cursor: pointer">Servicios
						<svg class="nav__more-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
							<path
								d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
						</svg>
					</p>
					<!-- Dropdown -->
					<div class="dropdown">
						<ul class="dropdown__list">
							<li class="dropdown__item">
								<a class="dropdown__link">Mi finca
									<svg class="dropdown__more-icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
										<path
											d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
									</svg>
								</a>
								<!-- Dropdown -->
								<div class="dropdown dropdown--right">
									<ul class="dropdown__list">
										<li class="dropdown__item">
											<a class="dropdown__link">Mis suelos
												<svg class="dropdown__more-icon " xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 320 512">
													<path
														d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
												</svg>
											</a>
											<!-- Dropdown -->
											<div class="dropdown dropdown--right">
												<ul class="dropdown__list">
													<!-- <li class="dropdown__item"><a class="dropdown__link" href="/mis-cultivos.html">Mis cultivos</a></li> -->
													<li class="dropdown__item"><router-link to="/mis-cultivos-page"
															class="dropdown__link">Mis Cultivos</router-link></li>
													<li class="dropdown__item"><router-link to="/recomendaciones-page"
															class="dropdown__link">Recomendaciones</router-link></li>
												</ul>
											</div>
											<!-- End Dropdown -->
										</li>
										<!-- <li class="dropdown__item"><a class="dropdown__link" href="/plantilla1.html">Mi
											Predial</a></li> -->
										<li class="dropdown__item"><router-link to="/predial-page" class="dropdown__link">Mi
												Predial</router-link></li>

									</ul>
								</div>
								<!-- End Dropdown -->
							</li>
							<li class="dropdown__item">
								<a class="dropdown__link">Mis vecinos
									<svg class="dropdown__more-icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
										<path
											d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
									</svg>
								</a>
								<!-- Dropdown despegable menu -->
								<div class="dropdown dropdown--right">
									<ul class="dropdown__list">
										<li class="dropdown__item"><router-link to="/no-encontrado" class="dropdown__link">Experiencias
												productivas</router-link></li>

										<li class="dropdown__item"><li class="dropdown__item"><router-link to="/no-encontrado" class="dropdown__link">Intercambio
												de saberes</router-link></li></li>
									</ul>
								</div>
								<!-- End Dropdown -->
							</li>
							<li class="dropdown__item">
								<a class="dropdown__link">
									Aprendiendo
									<svg class="dropdown__more-icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
										<path
											d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
									</svg>
								</a>
								<div class="dropdown dropdown--right">
									<ul class="dropdown__list">
										<li class="dropdown__item"><router-link to="/guia-page" class="dropdown__link">Cartilla</router-link></li>
									</ul>
								</div>
							</li>
							<li class="dropdown__item">
								<a class="dropdown__link">
									Herramientas
									<svg class="dropdown__more-icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
										<path
											d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
									</svg>
								</a>
								<div class="dropdown dropdown--right">
									<ul class="dropdown__list">
										<li class="dropdown__item"><router-link to="/guia-page" class="dropdown__link">Guía de
												análisis</router-link></li>
										<!-- <li class="dropdown__item"><a class="dropdown__link" href="/guia.html">Guía de análisis</a></li> -->
										<li class="dropdown__item">
												<router-link to="/no-encontrado" class="dropdown__link">Evaluación
												suelos</router-link>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
					<!-- End Dropdown -->
			</li>
			<!-- Menú Servicios Fin -->

			<!-- Menú Seguridad Inicio -->
			<li class="nav__item">
					<p class="nav__link nav-link" style="cursor: pointer">Menú Seguridad 
						<svg class="nav__more-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
							<path
								d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
						</svg>
					</p>
					<!-- Dropdown -->
					<div class="dropdown">
						<ul class="dropdown__list">
							<li class="dropdown__item">
								<!-- Dropdown despegable menu -->
								<ul class="dropdown__list">
										<li class="dropdown__item"><router-link to="/registro-page" class="dropdown__link">Registro</router-link></li>
										<li class="dropdown__item"><router-link to="/no-encontrado" class="dropdown__link">Administracion</router-link></li>
										
									</ul>
								<!-- End Dropdown -->
							</li>
							
						</ul>
					</div>
					<!-- End Dropdown -->
			</li>
			<!-- Menú Seguridad Fin -->
		</ul>
		<!-- End NavList Desktop -->

		<!-- Nav Toggle: Menú Mobile -->
		<nav class="navbar show">
			<div class="branding margin-toggle">
				<!-- <h2><a href="#" class="branding-logo">Menú</a></h2> -->
				<h2><a  class="titulo-menu">Menú</a></h2>
			</div>
			<!-- Funcionalidad de Cambio Del Icono Del Menú Mobile-->
			<span class="toggle-icon" style="margin-right: 10px;" @click="toggleMenu">
				{{ menuOpen ? '✕' : '☰' }}
			</span>
			<input type="checkbox" id="input-hamburger" v-model="menuOpen" hidden>
			<ul class="menu">
				<!-- Menú Inicio Ini -->
				<li><router-link to="/" class="menu-link" style="border-bottom: 1px solid #f2f3f7;">Inicio</router-link></li>
				<!-- Menú Inicio Fin -->

				<!-- Menú Inicio Ingreso -->
				<li><router-link to="/enter-page" class="menu-link"  style="border-bottom: 1px solid #f2f3f7;">Ingreso</router-link></li>
				<!-- Menú Ingreso Fin -->

				<!-- Menú  Contacto Inicio  -->
				<li><router-link to="/contact-page" class="menu-link"  style="border-bottom: 1px solid #f2f3f7;">Contacto</router-link></li>
				<!-- Menú Contacto Fin -->

				<!-- Menú Inicio Participantes -->
				<li><router-link to="/no-encontrado" class="menu-link"  style="border-bottom: 1px solid #f2f3f7;">Participantes</router-link></li>
				<!-- Menú Participantes Fin -->

				<!-- Menú Servicios Inicio -->
				<li class="has-dropdown">
					<a class="menu-link fa-solid fas fa-treasure-chest" style="border-bottom: 1px solid #f2f3f7;">Servicios
						<span class="arrow"></span>
					</a>
					<ul class="submenu">
						<li class="has-dropdown">
							<a class="menu-link" style="border-bottom: 1px solid #f2f3f7;">Mi Finca
								<span class="arrow"></span>
							</a>
							<ul class="submenu">
								<li class="has-dropdown">
									<a class="menu-link">Mis Suelos
										<span class="arrow"></span>
									</a>
									<ul class="submenu">
										<!-- <li><a href="#" class="menu-link">Mis Cultivos</a></li> -->
										<li><router-link to="/mis-cultivos-page" class="menu-link">Mis
												Cultivos</router-link></li>
										<!-- <li><a href="#" class="menu-link">Recomendaciones</a></li> -->
										<li><router-link to="/recomendaciones-page"
												class="menu-link">Recomendaciones</router-link></li>
									</ul>
								</li>
								<li><router-link to="/predial-page" class="menu-link">Mi Predial</router-link></li>
								<!-- <li><a href="#" class="menu-link">Mi Predial</a></li> -->
							</ul>
						</li>

						<li class="has-dropdown">
							<a class="menu-link" style="border-bottom: 1px solid #f2f3f7;">Mis Vecinos
								<span class="arrow"></span>
							</a>
							<ul class="submenu">
								
								<li><router-link to="/no-encontrado" class="menu-link">Experiencias Productivas</router-link></li>
								<li><router-link to="/no-encontrado" class="menu-link">Intercambio de Saberes</router-link></li>
							</ul>
						</li>
						<li class="has-dropdown">
							<a  class="menu-link" style="border-bottom: 1px solid #f2f3f7;">Aprendiendo
								<span class="arrow"></span>
							</a>
							<ul class="submenu">
								
								<li><router-link to="/guia-page" class="menu-link">Cartilla</router-link></li>
							</ul>
						</li>
						<li class="has-dropdown">
							<a class="menu-link" style="border-bottom: 1px solid #f2f3f7;">Herramientas
								<span class="arrow"></span>
							</a>
							<ul class="submenu">
								<li><router-link to="/guia-page" class="menu-link">Guia de analisis </router-link></li>
								<!-- <li><a href="#" class="menu-link">Guía de Análisis</a></li> -->
								<li><router-link to="/no-encontrado" class="menu-link">Evaluación de
										Suelos</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<!-- Menú Servicios Fin -->
				
				<!-- Menú Seguridad Inicio -->
				<li class="has-dropdown">
					<a class="menu-link fa-solid fas fa-treasure-chest">Menú Seguridad 
						<span class="arrow"></span>
					</a>
					<!-- Sub - Menú -->
					<ul class="submenu">
						<li class="has-dropdown">
							<li><router-link to="/registro-page" class="menu-link">Registro</router-link></li>
							<li><router-link to="/no-encontrado" class="menu-link">Administracion</router-link></li>
						</li>
					</ul>
				</li>
				<!-- Menú Seguridad Fin -->
			</ul>
		</nav>
		<!-- End Nav Toggle: Menú Mobile -->

		<!-- Nav Indicator -->
		<div class="nav__indicator"></div>
		<!-- End Nav Indicator -->
	</nav>
	<!-- End Nav Menú -->

	<!-- Overlay -->
	<div class="overlay" :class="{ open: isOverlayOpen }"></div>
  <!-- End Overlay -->
</template>
<style scoped>
/* Importantado Archivo CSS - Estilos*/
@import "@/assets/styles/components/navbar.css";
@import "@/assets/styles/components/dropdown.css";
@import "@/assets/styles/components/nav-links.css";
@import "@/assets/styles/components/button.css";
@import "@/assets/styles/pages/toggle-menu.css";
@import "@/assets/styles/header.css";

</style>


<script>
export default {
  data() {
    return {
      menuOpen: false,
      isOverlayOpen: false, // Nueva propiedad para controlar el overlay
    };
  },
  methods: {
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.isOverlayOpen = this.menuOpen;
    document.body.classList.toggle('menu-open', this.menuOpen);
  },
},

};
</script>