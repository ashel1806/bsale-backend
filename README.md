<img src="./images/logo.sample.png" alt="Logo of the project" align="right">

# BSALE - Backend &middot; [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm)
> Información acerca de la API desarrollada para la prueba de BSALE

Esta API permite obtener productos desde una base de datos relacional. Los productos se pueden filtrar por su nombre o por su categoría.

## Desarrollo

### Tecnologías
Para poder desarrollar esta API se han utlizado las siguientes tecnologías:

- Express (v4.18.2)
- Sequelize (v6.25.1)
- Dotenv (v16.0.3)
- Cors (v2.8.5)
- mysql2 (v2.3.3)
- nodemon (v2.0.20)

### Correr la API en local

```shell
# Clona el repositorio
git clone https://github.com/ashel1806/bsale-backend

# Accede a la carpeta del repositorio
cd bsale-backend

# Instala las dependencias necesarias
yarn install
# o npm install
```

Para poder iniciar la API se necesita crear y configurar un archivo  `.env` con las variables de entorno que se encuentran en el archivo de ejemplo `.env.example`

```shell
DB_NAME # El nombre de la base de datos a utlizar
DB_USER # El usuario configurado para la conexión
DB_PASSWORD # La contraseña establecida para el usuario
DB_HOST # El host en donde se encuentra la base de datos
```

A continuación podremos iniciar el proyecto

```shell
yarn run dev
# o npm run dev
```

## Base de datos

La base de datos utilizada es MySQL. El esquema de relaciones utilizado es el siguiente:

![](assets/esquema-relacional.jpeg)

