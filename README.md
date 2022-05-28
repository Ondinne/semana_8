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

# 4. Ejecución VRT

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
