// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from './homeRoutes';
import contactoRoutes from './contactoRoutes';
import ingresoRoutes from './ingresoRoutes';
import serviciosRoutes from './serviciosRoutes';
import registroRoutes from './registroRoutes';

const routes = [
  // Sistema Modular de Rutas
  ...homeRoutes,
  ...contactoRoutes,
  ...ingresoRoutes,
  ...serviciosRoutes,
  ...registroRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
