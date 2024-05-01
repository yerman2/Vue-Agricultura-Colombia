<template>
    <!-- Main Content -->
    <main class="mis-cultivos flow-intern main-layout section">
      <div class="container">
        <div class="row">
          <!-- Columna para las imágenes -->
          <div class="col-md-10 mb-4">
            <section>
                <h1 class="heading01" style="margin-top: 10px; ">Mis cultivos</h1>
              <!-- Primera pareja de Feature Cards -->
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="card border-0">
                    <div class="row no-gutters">
                      <div class="col-md-6"  @click="redirectToPage('/cultivos-page')" >
                        <img src="../../assets/images/Lote11.png" class="card-img" alt="Cultivo 1">
                      </div>
                      <div class="col-md-6">
                        <div class="card-body">
                          <h2 class="card-title">Cultivo 1</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="col-md-6 mb-4">
                  <div class="card border-0">
                    <div class="row no-gutters">
                      <div class="col-md-6" @click="redirectToPage('/cultivos-page')">
                        <img  src="../../assets/images/Lote2.png" class="card-img" alt="Cultivo 2">
                      </div>
                      <div class="col-md-6">
                        <div class="card-body text-md-right">
                          <h2 class="card-title">Cultivo 2</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Fin Primera pareja -->
  
              <!-- Segunda pareja de Feature Cards -->
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="card border-0">
                    <div class="row no-gutters">
                      <div class="col-md-6" @click="redirectToPage('/cultivos-page')" >
                        <img src="../../assets/images/Lote3.png" class="card-img" alt="Cultivo 3">
                      </div>
                      <div class="col-md-6">
                        <div class="card-body">
                          <h2 class="card-title">Cultivo 3</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="col-md-6 mb-4">
                  <div class="card border-0">
                    <div class="row no-gutters">
                      <div class="col-md-6" @click="redirectToPage('/cultivos-page')">
                        <img src="../../assets/images/Lote4.png" class="card-img" alt="Cultivo 4">
                      </div>
                      <div class="col-md-6">
                        <div class="card-body text-md-right">
                          <h2 class="card-title">Cultivo 4</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Fin Segunda pareja -->
            </section>
          </div>
          <!-- Fin Columna para las imágenes -->
  
          <!-- Columna para el Aside -->
          <div class="col-md-2 mb-4" style="margin-top: 35px; ">
            <aside >
              <ul class="aside__list" style="border: 1px solid black;">
                <li class="aside__item">
                  <div class="row">
                    <div class="col-md-6">
                      <figure>
                        <img src="../../assets/images/MisSuelos.jpg" alt="logo" class="img-fluid" loading="lazy" decoding="async" />
                      </figure>
                    </div>
                    <div>
                      <p class="text-right">Mis Suelos</p>
                    </div>
                  </div>
                </li>
                <li class="aside__item">
                  <div class="row">
                    <div class="col-md-6">
                      <figure>
                        <img src="../../assets/images/imgpredial.jpg" alt="logo" class="img-fluid" loading="lazy" decoding="async" />
                      </figure>
                    </div>
                    <div >
                      <p class="text-right">Mi Predial</p>
                    </div>
                  </div>
                </li>
                <li class="aside__item">
                  <div class="row">
                    <div>
                      <figure>
                        <img src="../../assets/images/Red.jpg" alt="logo" class="img-fluid" loading="lazy" decoding="async" />
                      </figure>
                    </div>
                    <div class="col-md-6">
                      <p class="text-right">Red de Conocimientos</p>
                    </div>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
          <!-- Fin Columna para el Aside -->
        </div>
  
        <!-- Columna para la imagen del mapa -->
        <div class="col-md-10 mb-4 order-0 order-md-1">
          <article >
            <figure class="mis-cultivos__map">
              <img src="../../assets/images/map.png" alt="Mapa" class="img-fluid" loading="lazy" decoding="async" />
            </figure>
          </article>
        </div>
        <!-- Fin Columna para la imagen del mapa -->
      </div>
    </main>
    <!-- End Main Content -->
  </template>
  <script>
  export default {
    methods: {
      redirectToPage(route) {
        // Realiza la redirección a la página especificada
        this.$router.push(route);
      }
    }
  };
  </script>
  <style scoped>
  @import "@/assets/styles/pages/predial.css";
  </style>
  