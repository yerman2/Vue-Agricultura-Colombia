  ## **Tecnologias**

* [vitejs]('https://vitejs.dev/'): https://vitejs.dev/

## **Requerimientos**
<!-- Recomendada tener la version de Node v20.11.0 en adelante -->
Tener instalado [nodejs]('https://nodejs.org/es'): https://nodejs.org/es

## **Instalación**

* Descomprimir el archivo zip/rar
* Abrir la consola cmd en la raiz del proyecto

- **Instalar las dependencias:**
```
npm install
```
- **Ejecutar el entorno de desarrollo:** verificar  http://localhost:5173/
```
npm run dev
```
- **Compilar el proyecto:**: Esto genera una carpeta llamada "dist" en la raiz del proyecto. Dicha carpeta es la que se sube al dominio/hosting.
```
npm run build
```
- **Verificar cómo se vería en producción** (solo funciona si se ejecutó `npm run build` y existe una carpeta llamada 'dist' en el root del proyecto):
```
npm run preview
```

<!-- - Sí desea agregar nuevas rutas, no es necesario tocar nada, ya que al usted crear los archivos 
y carpetas en el proyecto mismo, se agregarán estas automaticamente al hacer el build, 
ya que esta configurado para que no sea necesario agregar de forma manual cada archivo o carpeta,
el siguiente codigo ya hace la funcionalidad
 -->

```       

'@': fileURLToPath(new URL('./src', import.meta.url))

```