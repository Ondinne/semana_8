# Integrantes y correos
- Julie Andrea Padilla González j.padillag@uniandes.edu.co
- Julián Cáceres Florez j.caceresf@uniandes.edu.co

# 1. Pruebas manuales exploratorias

https://github.com/Ondinne/semana_8/wiki/Pruebas-manuales-exploratorias

# 2. Ejecución Pruebas de reconocimiento
## 2.1 Monkey Cypress
Ejecutar el siguiente comando en el directorio ./2_Pruebas_reconocimiento/monkey-cypress

```
npm i 
```
Es necesario contar con Cypress instalado, preferiblemente de forma global en el equipo. Para hacerlo:
```
npm install cypress -g
```
También es necesario contar con Node.js y npm.

Tener la aplicación Ghost instalada y corriendo en el entorno local, las pruebas se ejecutaron sobre la versión 4.41.3

Posteriormente, definir la URL a visitar y las credenciales de Ghost dentro del archivo ./2_Pruebas_reconocimiento/monkey-cypress/integration/monkey/monkey.js.

Por último, ejecutar:

```
cypress open  
```
Ahora, abrir la prueba monkey.js dando doble clic sobre ella. 

## 2.2. RIPuppet
Es necesario contar con Node.js y npm.

- En una consola ubicarse en la carpeta 2_Pruebas_reconocimiento\RIPuppet
- Ejecutar el comando ```npm install```
- Ejecutar el comando ```node index.js``` para correr la prueba

### Para ver los resultados
- En una consola ubicarse en la carpeta 2_Pruebas_reconocimiento\RIPuppet\results
- Ejecutar el comando ```npm install -g http-server```
- Ejecutar el comando ```http-server```, esto generará un servidor local al que se debe acceder
- Una vez en el servidor local que suele ser localhost:8080, dar click en "chromium", luego report.html y finalmente dar click en el enlace que aparece con la fecha en la que está corriendo la prueba.

# 3. Ejecución Pruebas E2E

Es necesario contar con Node.js y npm.

## 3.1. Escenarios en Cypress
- Desde una consola, ubicarse en la carpeta 3_Pruebas_E2E
- Ejecutar el comando ```npm install```
- Ejecutar el comando ```npm i faker```
- Configurar el archivo env.js con el puerto y los datos de usuario y password que tenga en su configuración local de ghost.
- Ejecutar el comando ```cypress open```
- Una vez abierta la interafaz de cypress, dar click en el escenario que se desee ejecutar.

## 3.2. Escenarios en Kraken
- Desde una consola, ubicarse en la carpeta 3_Pruebas_E2E\kraken>
- Ejecutar el comando ```npm install```
- Ejecutar el comando ```npm install -g appium```
- Ejecutar el comando ```npm install kraken-node```
- Configurar el archivo properties.json con el puerto y los datos de usuario y password que tenga en su configuración local de ghost.
- Ubicarse en la carpeta \3_Pruebas_E2E\kraken\features
- Copiar el contenido del archivo .txt al archivo ghost.feature, para cada uno de los escenarios que se quieran probar.
- Para correr cada prueba, ejecutar el comando ```./node_modules/kraken-node/bin/kraken-node run```

# 4. Ejecución VRT

## 4.1. Configuración inicial
- Es necesario contar con Node.js y npm.
- Desde una consola, ubicarse en la carpeta 4_VRT
- Ejecutar el comando ```npm install```
- Ejecutar el comando ```npm i faker```

## 4.2. Paso 1. Correr los escenarios en la versión 4.41.3
- Configurar el archivo env.js con el puerto, los datos de usuario y password que tenga en su configuración local de ghost y la versión 4.41.3 según las instrucciones que aparecen en el archivo.
- Ejecutar el comando ```cypress open```
- Una vez abierta la interafaz de cypress, dar click en el escenario que se desee ejecutar.(correr un escenario a la vez, primero en la versión 4.41.3 y luego en la versión 3.42)
## 4.3. Paso 2. Correr los escenarios en la versión 3.42
- Configurar el archivo env.js con el puerto, los datos de usuario y password que tenga en su configuración local de ghost y la versión 3.42 según las instrucciones que aparecen en el archivo.
- Ejecutar el comando ```cypress open```
- Una vez abierta la interafaz de cypress, dar click en el escenario que se desee ejecutar.(correr un escenario a la vez, primero en la versión 4.41.3 y luego en la versión 3.42)

## 4.4. Paso 3. Ejecutar el archivo index.js
- Dar click derecho en el archivo index.js y seleccionar "Open with live server", se visualizarán los pantallazos de la VRT para el escenario ejecutado.


# 5. Ejecución de escenarios de validación de datos

## 5.1. Entorno inicial
Se debe instalar el proyecto ejecutando en la raíz de este:
```
npm i 
```

Es necesario contar con Cypress instalado, preferiblemente de forma global en el equipo. Para hacerlo:
```
npm install cypress -g
```
También es necesario contar con Node.js y npm.

Tener la aplicación Ghost instalada y corriendo en el entorno local, las pruebas se ejecutaron sobre la versión 4.41.3

## 5.2. Descripción de escenarios 

https://github.com/jcaceresf/pruebas-automatizadas-semana-7/wiki/Descripci%C3%B3n-de-escenarios

## 5.3. Instrucciones para correr las pruebas 

Configurar el archivo env.js con los datos locales de su aplicación incluyendo el puerto, usuario y password.

## 5.4. Escenarios con generación de datos aleatorios a priori 
###### *(cypress/integration/a_priori_cases)*
Para crear un nuevo pool de datos aleatorios, ejecutar en la raíz del proyecto: 
```
node poolGenerator.js
```
El nuevo pool de datos será guardado en la carpeta cypress/fixtures/pool.json. Posteriormente, ejecutar dentro de la raíz del proyecto:

```
cypress open
```

Con esto se abrirá una ventana con la interfaz de Cypress donde se puede seleccionar con doble click el caso a ejecutar. Para ejecutarlos se presupone que se tiene una versión local de Ghost funcionando, cuya URL debe ser ingresada en la propiedad URL del archivo cypress/integration/env.js, además de los datos de loggeo del usuario administrador. 

## 5.5. Escenarios con un pool dinámico
###### *(cypress/integration/dynamic_pool)*
Ya que el pool será creado durante la ejecución de la prueba, sólo es necesario ejecutar: 
```
cypress open
```
Y comenzar a seleccionar los casos a probar.

## 5.6. Escenarios con datos aleatorios
###### *(cypress/integration/random_case_scenario)*
Seguir las instrucciones del paso anterior. 
