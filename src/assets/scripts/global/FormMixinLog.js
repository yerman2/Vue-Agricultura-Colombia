// FormularioMixin.js
export default {
  data() {
    return {
      formData: {
        user: '',
        password: ''
      },
      formSubmitted: false,
      passwordError: null
    };
  },
  methods: {
    submitForm() {
      this.formSubmitted = true;

      // Lógica para validar el formulario
      if (this.isFormValid()) {
        // Si el formulario es válido, realiza la redirección
        console.log('Redirección a /sesion-page');
        this.$router.push('/sesion-page');
      } else {
        // Si el formulario no es válido, realiza otras acciones o muestra un mensaje de error
        console.log('Formulario no válido. Realiza otras acciones o muestra mensaje de error.');
      }

      // Después de 5 segundos, restablece formSubmitted a false
      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);
    },
    isFormValid() {
      const { user, password } = this.formData;

      // Validación de usuario: Verifica que el campo 'user' no esté vacío.
      const isUserValid = user.trim() !== '';

      // Validación de contraseña: Verifica que la contraseña tenga al menos 8 caracteres, contenga letras y números.
      const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
      this.passwordError = isPasswordValid ? null : 'La clave debe contener al menos ocho caracteres, una letra y un número';

      // Retorna true si todas las condiciones son verdaderas
      return isUserValid && isPasswordValid;
    }
  }
};
