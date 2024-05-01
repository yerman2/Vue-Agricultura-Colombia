<template>
    <!-- Main Content -->
    <main class="section main-layout" style="display: grid; padding: 0 15px;">
      <!-- Register -->
      <section>
        <article style="margin-bottom: 10rem; margin-top: 28px; max-width: 30rem; margin-inline: auto;">
          <h2 class="mb-4 text-center">Formulario de login</h2>
          <form @submit.prevent="submitForm" class="form" id="form-register" autocomplete="off" novalidate="novalidate" action="ingreso.html">
  
            <!-- Input Usuario -->
            <div class="mb-3">
              <label for="register-user" class="form-label">Usuario</label>
              <input v-model.trim="formData.user" :class="{ 'is-invalid': formSubmitted && !formData.user }" id="register-user" class="form-control" autocomplete="off" type="text" placeholder="Ingrese su usuario" required />
              <div v-if="formSubmitted && !formData.user" class="invalid-feedback">Ingrese su usuario</div>
            </div>
            <!-- End Input Usuario -->
  
          <!-- Input Clave -->
<div class="mb-3">
  <label for="register-password" class="form-label">Clave</label>
  <input v-model.trim="formData.password"
    :class="{ 'is-invalid': formSubmitted && (!formData.password || passwordError) }"
    id="register-password" class="form-control" autocomplete="off" type="password"
    placeholder="Ingrese su clave" required />
  <div v-if="formSubmitted && !formData.password" class="invalid-feedback">Ingrese su clave</div>
  <div v-if="formSubmitted && passwordError && formData.password" class="text-danger mt-2">{{ passwordError }}</div>
</div>
<!-- End Input Clave -->

  
            <div class="mt-4">
              
              <button type="submit" class="btn btn-primary w-100">Enviar</button>
            </div>
          </form>
        </article>
      </section>
      <!-- End Register -->
    </main>
    <!-- End Main Content -->
  </template>
  
  <script>
  import FormMixinLog from '@/assets/scripts/global/FormMixinLog';
  
  export default {
    // Archivo que contiene la validación para este formulario
    mixins: [FormMixinLog],
  };
  </script>
  
  