// homeRoutes.js

// Importa el Archivo
import Home from '../views/HomeView.vue';
import NoEncontrado from '../views/pages/ProntoPage.vue';

const homeRoutes = [
  // Ruta de Inicio - Home
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/no-encontrado',
    name: 'NoEncontrado',
    component: NoEncontrado,
  },
];


// Se Exportan las rutas para su posterior uso
export default homeRoutes;
