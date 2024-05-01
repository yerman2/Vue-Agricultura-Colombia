<template>
  <div class="container">
    <div class="row">
      <!-- Dos imágenes -->
      <div class="col-md-3 col-sm-12 d-flex align-items-start mb-3 mb-sm-0">
        <figure class="footer__logo-2 footer__justify mx-auto mb-3 mb-sm-0">
          <img src="../../assets/images/iso 45001.png" alt="logo" class="img-fluid" />
        </figure>
      </div>
      <div class="col-md-3 col-sm-12 d-flex flex-column align-items-center">
        <div class="d-flex align-items-start mb-3 mb-sm-0">
          <figure class="footer__logo-1 footer__justify">
            <img src="../../assets/images/iso 45001.png" alt="logo" class="img-fluid" />
          </figure>
        </div>
        <p class="footer__text" style="margin-top: 12px;">Todos los derechos reservados</p>
      </div>
      <!-- Fin de las dos imágenes -->

      <!-- Separador vertical -->
      <div class="col-md-1 d-md-flex d-none align-items-center h-100 border-left"></div>

      <!-- Texto -->
      <div class="col-md-5 col-sm-12">
        <article class="footer__article">
          <p class="footer__text">Calle 26 26 26 Bogotá D.C</p>
          <p class="footer__text"><strong>Sede administrativa:</strong> Torre central piso 7</p>
          <p class="footer__text">Código postal 111111 - Teléfono 749 1692 Torre central piso 7</p>
          <p class="footer__text align-self-sm-end">Diseño: Universidad Central</p>
        </article>
      </div>
      <!-- Fin del texto -->
    </div>
  </div>
</template>

<style scoped>
/* Importando Archivo CSS - Estilos */
@import "@/assets/styles/components/footer.css";

/* Alinea la primera imagen al centro en dispositivos móviles */
@media (max-width: 768px) {
  .footer__logo-2 {
    text-align: center;
  }
}

</style>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
</script>
