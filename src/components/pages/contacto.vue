<template>
  <!-- Main Content -->
  <main class="section main-layout" style="display: grid; padding: 0 15px;">
    <!-- Register -->
    <section>
      <article style="margin-bottom: 10rem; margin-top: 28px; max-width: 30rem; margin-inline: auto;">
        <h2 class="mb-4 text-center">Formulario de contacto</h2>
        <!-- Formulario Inicia aquí -->
        <form @submit.prevent="submitForm" class="form" id="form-register" autocomplete="off" novalidate="novalidate">
          <!-- Input Nombre -->
          <div class="mb-3">
            <label for="register-name" class="form-label">Nombre</label>
            <!-- Vincula el valor del input con formData.name -->
            <input v-model.trim="formData.name" :class="{ 'is-invalid': formSubmitted && !formData.name }"
              id="register-name" class="form-control" autocomplete="off" type="text"
              placeholder="Ingrese su nombre completo" required />
            <!-- Muestra un mensaje de error si el formulario ha sido enviado y el nombre está vacío -->
            <div v-if="formSubmitted && !formData.name" class="invalid-feedback">Ingrese su nombre</div>
          </div>
          <!-- Fin Input Nombre -->

          <!-- Input Correo -->
          <div class="mb-3">
            <label for="register-email" class="form-label">Correo</label>
            <!-- Vincula el valor del input con formData.email y verifica si hay errores -->
            <input v-model.trim="formData.email"
              :class="{ 'is-invalid': formSubmitted && (!formData.email || emailError) }" id="register-email"
              class="form-control" autocomplete="off" type="email" placeholder="Ingrese su correo electrónico" required />
            <!-- Muestra un mensaje de error si el formulario ha sido enviado y el correo está vacío -->
            <div v-if="formSubmitted && !formData.email" class="invalid-feedback">Ingrese su correo electrónico</div>
            <!-- Muestra un mensaje de error personalizado si hay un error en el formato del correo -->
            <div v-if="formSubmitted && emailError && formData.email" class="text-danger mt-2">{{ emailError }}</div>
          </div>
          <!-- Fin Input Correo -->

          <!-- Input Usuario -->
          <div class="mb-3">
            <label for="register-user" class="form-label">Usuario</label>
            <!-- Vincula el valor del input con formData.user -->
            <input v-model.trim="formData.user" :class="{ 'is-invalid': formSubmitted && !formData.user }"
              id="register-user" class="form-control" autocomplete="off" type="text" placeholder="Ingrese su usuario"
              required />
            <!-- Muestra un mensaje de error si el formulario ha sido enviado y el usuario está vacío -->
            <div v-if="formSubmitted && !formData.user" class="invalid-feedback">Ingrese su usuario</div>
          </div>
          <!-- Fin Input Usuario -->

          <!-- Input Móvil -->
          <div class="mb-3">
            <label for="register-phone" class="form-label">Móvil</label>
            <!-- Vincula el valor del input con formData.phone -->
            <input v-model.trim="formData.phone" :class="{ 'is-invalid': formSubmitted && !formData.phone }"
              id="register-phone" class="form-control" autocomplete="off" type="number" placeholder="Introduzca su móvil"
              required />
            <!-- Muestra un mensaje de error si el formulario ha sido enviado y el teléfono está vacío -->
            <div v-if="formSubmitted && !formData.phone" class="invalid-feedback">Ingrese su número de móvil</div>
          </div>
          <!-- Fin Input Móvil -->

          <!-- Input Clave -->
          <div class="mb-3">
            <label for="register-password" class="form-label">Clave</label>
            <!-- Vincula el valor del input con formData.password y verifica si hay errores -->
            <input v-model.trim="formData.password"
              :class="{ 'is-invalid': formSubmitted && (!formData.password || !isPasswordValid) }"
              id="register-password" class="form-control" autocomplete="off" type="password"
              placeholder="Ingrese su clave" required />
            <!-- Muestra un mensaje de error si el formulario ha sido enviado y la clave está vacía -->
            <div v-if="formSubmitted && !formData.password" class="invalid-feedback">Ingrese su clave</div>
            <!-- Muestra un mensaje de error personalizado si hay un error en la validación de la clave -->
            <div v-if="formSubmitted && isPasswordValid === false && formData.password" class="text-danger mt-2">
              La clave debe contener al menos ocho caracteres, una letra y un número
            </div>
          </div>
          <!-- Fin Input Clave -->

          <!-- Botón de envío del formulario -->
          <div class="mt-4">
            <button type="submit" class="btn btn-primary w-100">Enviar</button>
          </div>
        </form>
        <!-- Formulario Finaliza aquí -->
      </article>
    </section>
    <!-- Fin Register -->
  </main>
  <!-- Fin Main Content -->
</template>

<script>
import FormMixinContact from '@/assets/scripts/global/FormMixinContact';

export default {
  // Archivo que contiene la validación para este formulario
  mixins: [FormMixinContact],
};
</script>
