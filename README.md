# Guia para correr el proyecto
- Instalar las dependencias del proyecto:
``` 
npm install 
```

- Adicional: Todas las dependencias del proyecto fueron instaladas con la versión de node establecida en el .nvmrc (v18.17.1) en caso de tener nvm instalado utilizar
```
nvm use
npm install

 ```
- El proyecto tiene una Url de API establecida para que funcione con un backend en producción, en caso de querer probar de manera local cambiar los valores de esa constante


```
<!-- Ruta -->
src/store/patients/actions.ts

Linea 8: const apiURL = 'https://laboratorio-back.onrender.com'
 ```

- Iniciar aplicación:
```
$ npm run dev
 ```

# Estructura del proyecto
- utils: Contiene helpers para utilizar en la aplicación
- store: Utiliza zustand para manejar el estado global de la aplicación
- pages: Contiene cada uno de los components principales para renderizar en la aplicación
- navigation: Contiene todas las rutas disponibles de la aplicación
- components: Contiene componentes reutilizabes para usar en la aplicación, en este caso se usan layout y algunos componentes UI Cómo texto y botones
