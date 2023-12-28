# Prueba técnica Axity

En este repositorio se encuentra alojado el desarrollo de la prueba técnica

## Comenzando 🚀

Instrucciones generales de cómo correr el proyecto de forma local

### Pre-requisitos 📋

Para poder ejecutar el proyecto de forma local se deben tener instalados los siguientes programas:

1. Tener instalado Git para poder clonar el repositorio
2. Visual Studio Code (O cualquier otro editor de tecto de preferencia)
3. Tener instalado Mysql motor de base de datos
4. Node JS lenguaje de programación necesario para correr el aplicativo

### Instalación 🔧

Asumiendo que se cuentan con los programas previamente mencionados para poder ejecutar esta parte del proyecto, el siguiente paso a paso describirá cómo poder desplegar el proyecto de forma local

1. Se debe clonar el repositorio en una carpeta dentro del equipo en que se quiere desplegar
2. Luego se debe acceder a la carpeta raíz donde quedó el repositorio y allí abrir una consola de comandos y ejecutar el comando: "npm install"
3. Posteriormente crear una base de datos en MySQL la cual se llamará "axity", en el repositorio hay un .sql con el cual se importa a la base de datos mencionada anteriormente
4. ir al archivo src/config/sequelize y asignar la conexión a mySQL.
5. Una vez finalizado el proceso, se ejecuta el comando: "npm start" 

