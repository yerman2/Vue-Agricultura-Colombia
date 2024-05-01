// FormularioMixin.js
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        user: '',
        phone: '',
        password: ''
      },
      formSubmitted: false,
      emailError: null,
      isPasswordValid: true
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

      // Después de 5 segundos, restablece formSubmitted a false, es decir, los imputs se mostraran normal, sin color
      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);
    },
    isFormValid() {
      const { name, email, user, phone, password } = this.formData;

      // Validación de email: Utiliza una expresión regular para verificar el formato del email
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      // Actualizamos el estado del mensaje de error para el campo de email
      this.emailError = isEmailValid ? null : 'Ingrese un correo electrónico válido';

      // Resto de las validaciones (nombre, usuario, teléfono y contraseña)
      const isNameValid = name.trim() !== '';
      const isUserValid = user.trim() !== '';
      const isPhoneValid = typeof phone === 'string' ? phone.trim() !== '' : phone.toString().trim() !== '';
      this.isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

      // Verificar que contiene cada imput, en este caso, true or false, se puede comentar o borrar
      console.log('Validación de name:', isNameValid);
      console.log('Validación de email:', isEmailValid);
      console.log('Validación de user:', isUserValid);
      console.log('Validación de phone:', isPhoneValid);
      console.log('Validación de password:', this.isPasswordValid);

      return isNameValid && isEmailValid && isUserValid && isPhoneValid && this.isPasswordValid;
    }
  }
};
