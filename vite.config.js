// Importa las funciones fileURLToPath y URL del módulo 'node:url'
import { fileURLToPath, URL } from 'node:url'

// Importa la función defineConfig de Vite y el plugin Vue de Vite
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Configuración principal de Vite
export default defineConfig({
  // Lista de plugins a utilizar, en este caso solo el plugin Vue
  plugins: [
    vue(),
  ],

  // Configuración de resolución de módulos
  resolve: {
    // Alias que permite referenciar la carpeta src usando '@' en lugar de la ruta completa
    // No es necesario Agregar más carpetas o rutas espesificas, ya que se agregan en automatico
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // Puerto en Local
    port: 5173,
    // Puerto Para Server
    host: '0.0.0.0', // Esto permite que el servidor sea accesible desde todas las interfaces
  }
})


