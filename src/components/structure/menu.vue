<script setup>
	//Accordion: Menu responsive
const accordionToggleButtons = document.querySelectorAll('[data-toggle-accordion="true"]')

accordionToggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const accordionBody = this.parentElement.nextElementSibling;
    const accordionIcon = this.parentElement.parentElement.querySelector('.accordion__more-icon');

    const isActive = accordionBody.classList.toggle("active");
    const isActiveIcon = accordionIcon.classList.toggle("active");

    if (!isActive) {
      accordionBody.querySelectorAll(".accordion__body.active").forEach(function (element) {
        element.classList.remove("active");
      });
    }

    const accordionLinks = accordionBody.querySelectorAll(".accordion__link");

      const firstAccordionLink = accordionBody.querySelector(".accordion__link");
      if (firstAccordionLink) {
        firstAccordionLink.classList.toggle("active");
      }


  });
});

</script>

<template>

   <!-- Menu Responsive-->
		<div class="menu">
			<p class="menu__title">Menu</p>
			<!-- Menu List -->
			<ul class="menu__list">
				<li class="menu__item"><a class="menu__link" href="/">Inicio</a></li>
				<!-- Accordion -->
				<li class="menu__item accordion">
					<!-- Accordion Header -->
					<div class="accordion__header">
						<button class="accordion__toggle" data-toggle-accordion="true">
							<p class="menu__link">Servicios</p>
							<svg class="accordion__more-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
								<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
							</svg>
						</button>
					</div>
					<!-- End Accordion Header -->

					<!-- Accordion Body -->
					<div class="accordion__body">
						<!-- Menu List -->
						<ul class="menu__list ml-8">
							<li class="accordion">
								<!-- Accordion Header -->
								<div class="accordion__header">
									<button class="accordion__toggle" data-toggle-accordion="true">
										<p class="menu__link accordion__link" href="/">Mi finca</p>
										<svg class="accordion__more-icon" xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 320 512">
											<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
										</svg>
									</button>
								</div>
								<!-- End Accordion Header -->

								<!-- Accordion Body -->
								<div class="accordion__body">
									<ul class="menu__list ml-8">
										<li class="accordion">
											<!-- Accordion Header -->
											<div class="accordion__header">
												<button class="accordion__toggle" data-toggle-accordion="true">
													<p class="menu__link accordion__link" href="/">Mis suelos</p>
													<svg class="accordion__more-icon" xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 320 512">
														<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
													</svg>
												</button>
											</div>
											<!-- End Accordion Header -->
												<!-- Accordion Body -->
												<div class="accordion__body">
													<ul class="menu__list ml-8">
														<li class="accordion">
															<div class="accordion__header">
																<a class="accordion__link" href="/mis-cultivos.html">Mis cultivos</a>
															</div>
															<div class="accordion__header">
																<a class="accordion__link" href="/">Recomendaciones</a>
															</div>
															<div class="accordion__body">
															</div>
														</li>
													</ul>
												</div>
												<!-- End Accordion Body -->
											<!-- Accordion Header -->
											<div class="accordion__header">
												<button class="accordion__toggle" data-toggle-accordion="true">
													<p class="menu__link accordion__link" href="/">Mi Predial</p>
													<!--<svg class="accordion__more-icon" xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 320 512">
														<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
													</svg> -->
												</button>
											</div>
											<!-- End Accordion Header -->
										</li>
									</ul>
								</div>
								<!-- End Accordion Body -->
							</li>
							<li class="accordion">
								<div class="accordion__header">
									<button class="accordion__toggle" data-toggle-accordion="true">
										<p class="menu__link accordion__link" href="/">Mis vecinos</p>
										<svg class="accordion__more-icon" xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 320 512">
											<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
										</svg>
									</button>
								</div>
								<div class="accordion__body">
									<ul class="menu__list ml-8">
										<li class="">
											<div class="accordion__header">
												<button class="accordion__toggle" data-toggle-accordion="true">
													<a class="accordion__link" href="/">Experiencias productivas</a>
												</button>
											</div>
										</li>
										<li class="">
											<a class="accordion__link" href="/plantilla1.html">Intercambio de saberes</a>
										</li>
									</ul>
								</div>
							</li>
							<!-- Accordion -->
							<li class="accordion">
								<div class="accordion__header">
									<button class="accordion__toggle" data-toggle-accordion="true">
										<p class="menu__link accordion__link" href="/">Aprendiendo</p>
										<svg class="accordion__more-icon" xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 320 512">
											<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
										</svg>
									</button>
								</div>
								<div class="accordion__body">
									<ul class="menu__list ml-8">
										<li class="accordion">
											<a class="menu__link accordion__link" href="/plantilla2.html">Cartilla</a>
										</li>
									</ul>
								</div>
							</li>
							<!-- End Accordion -->

							<!-- Accordion -->
							<li class="accordion">
								<div class="accordion__header">
									<button class="accordion__toggle" data-toggle-accordion="true">
										<p class="menu__link accordion__link" href="/">Herramientas</p>
										<svg class="accordion__more-icon" xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 320 512">
											<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
										</svg>
									</button>
								</div>
								<div class="accordion__body">
									<ul class="menu__list ml-8">
										<li class="accordion__header">
											<a class="menu__link accordion__link" href="guia.html">Guía de análisis</a>
										</li>
										<li class="">
											<a class="menu__link accordion__link" href="/plantilla2.html">Evaluación de suelos</a>
										</li>
									</ul>
								</div>
							</li>
							<!-- End Accordion -->
						</ul>
						<!-- End Menu List -->
					</div>
					<!-- End Accordion Body -->
				</li>
				<!-- End Accordion -->
				<li class="menu__item accordion">
					<div class="accordion__header">
						<button class="accordion__toggle" data-toggle-accordion="true">
							<p class="menu__link" href="/">Participantes</p>
							<svg style="visibility: hidden" class="accordion__more-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
								<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
							</svg>
						</button>
					</div>
				</li>
				<li class="menu__item"><a class="menu__link" href="contacto.html">Contacto</a></li>
				<li class="menu__item"><a class="menu__link" href="ingreso.html">Ingreso</a></li>
				<li class="menu__item"><a class="menu__link" href="/">Mapa del Sitio</a></li>
			</ul>
			<!-- End Menu List -->
		</div>
	<!-- End Menu Responsive -->

	<!-- Overlay -->
		<div class="overlay"></div>
	<!-- End Overlay -->
	
</template>
<style scoped>
/* Importantado Archivo CSS - Estilos*/
@import "@/assets/styles/components/menu.css";
@import "@/assets/styles/components/accordion.css";

</style>