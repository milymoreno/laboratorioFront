# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
