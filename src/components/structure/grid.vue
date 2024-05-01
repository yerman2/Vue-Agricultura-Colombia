<template>
  <div class="container">
    <!-- Primer par de imágenes con texto a la derecha -->
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="d-flex flex-md-row flex-column  align-items-start">
          <img src="../../assets/images/Red (2).jpg" class="img-fluid mb-2 img-size mx-auto" alt="Imagen 1" />
          <div class="text-right text-md-space text-center text-md-left">
            <h2 class="text-centrado">Red de conocimientos</h2>
            <p class="text-justificado">En la plataforma web diseñada específicamente para promover la gestión sostenible
              de suelos. Esta red tiene como objetivo principal reunir a expertos, profesionales, investigadores y
              comunidades de productores agrícolas y pecuarios interesadas en el ámbito de la conservación y uso
              responsable del suelo</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="d-flex flex-md-row flex-column align-items-md-center align-items-start">
          <img src="../../assets/images/Salida-tecnica-Sesquile.jpg" class="img-fluid mb-2 img-size mx-auto"
            alt="Imagen 2" />
          <div class="text-right text-md-space text-center text-md-left">
            <h2 class="text-centrado">Evaluación de calidad de suelos</h2>
            <p class="text-justificado">Recomendaciones para su gestión sostenible. Cuéntanos sobre la salud de tus suelos
              y de tu cultivo y obtendrás recomendaciones de mejoramiento</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin Primer par de imágenes con texto a la derecha -->

    <!-- Segundo par de imágenes con texto a la derecha -->
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="d-flex flex-md-row flex-column align-items-md-center align-items-start">
          <img src="../../assets/images/Predial.png" class="img-fluid mb-2 mx-auto" alt="Imagen 3" />
          <div class="text-right text-md-space text-center text-md-left">
            <h2 class="text-centrado">Análisis Predial</h2>
            <p class="text-justificado">Brinda la información y verificación de los detalles físicos y legales de los
              terrenos de tu finca</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="d-flex flex-md-row flex-column align-items-md-center align-items-start">
          <img src="../../assets/images/PicHome.jpg" class="img-fluid mb-2 mx-auto" alt="Imagen 4" />
          <div class="text-right text-md-space text-center text-md-left">
            <h2 class="text-centrado">Preguntas Claves</h2>
            <p class="text-justificado">Información catastral sobre el predioInformación catastral sobre el
              predioInformación catastral sobre el predioInformación</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin Segundo par de imágenes con texto a la derecha -->
  </div>
</template>

<style scoped>
/* Clases específicas para este Sistema de GRID*/

/* Separar el texto de la imagen en móviles */
.text-md-space {
  margin-left: 30px;
}

/* Setear el Tamaño de las Imágenes */
.img-size {
  width: 200px;
  height: 200px;
}
.img-size2 {
  margin-top: 10px;
}

/* Centrar Título */
.text-centrado {
  text-align: center;
}

/* Párrafo Justificado */
.text-justificado {
  text-align: justify;
}

@media (max-width: 768px) {

  /* Acomodar el Texto - Mobile */
  .text-md-space {
    margin-left: 0px;
  }

}</style>
