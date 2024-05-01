// contactoRoutes.js
import Enter from '../views/IngresoView.vue';
import Logeo from '../views/pages/InicioSesionPage.vue';

const ingresoRoutes = [
  {
    path: '/enter-page',
    name: 'Ingreso',
    component: Enter,
  },
  {
    path: '/sesion-page',
    name: 'Logeo',
    component: Logeo,
  },

];

export default ingresoRoutes;
