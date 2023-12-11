# Runtime
Un entorno de ejecución es un conjunto de recursos en el que se ejecutan
programas. Proporciona el soporte necesario para que el código fuente se
convierta en resultados tandibles.

En lenguajes como TypeScript, un entorno de ejecución es esencial para que el
código pueda ser interpretado y ejecutado.

Las opciones que vamos a explorar son:
* Node.js: https://nodejs.org/en
* Deno: https://deno.com


## Node.js
Node.js es un entorno de ejecución de JavaScript creado en 2009 y basado en el
motor V8 de Google Chrome. Es conocido por su enfoque basado en eventos y no
bloqueante, lo que lo hace muy eficiente para manejar conexiones simultáneas.

### Características
- Asincronía y Event-Driven: Utiliza un modelo de operaciones de E/S no
bloqueantes, ganando eficiencia y escalabilidad.
- Gran comunidad: Al ser utilizado en la industria, tiene una gran comunidad
de desarrolladores y una amplia gama de bibliotecas y frameworks.


## Deno
Deno es un entorno de ejecución de JavaScript y TypeScript, anunciado en 2018
como una reinvención de Node.js. Se diseñó con un enfoque en la seguridad, un
sistema de módulos mejorado y la eliminación de características consideradas
problemáticas en Node.js.


### Características
- Seguridad por Defecto: Los permisos deben otorgarse explícitamente.
- Soporte Nativo para TypeScript: Se puede ejecutar código TypeScript
directamente, sin necesidad de compilación adicional.
- Enrutamiento de activos: Permite cargar y empaquetar vaios tipos de activos
como CSS, imágenes o fuentes. Es útil para optimizar y reducir las solicitudes
al servidor.
- Sistema de Módulos Incorporado: No utiliza npm, tiene un sistema de
módulos incorporado, que se importan directamente desde URLs.


## Conclusión
Mientras que [Node.js](#nodejs) tiene un ecosistema establecido y es
ampliamente utilizado en la industria, [Deno](#deno) ofrece mejoras en
seguridad, sistema de módulos y compatibilidad con TypeScript.

Para este proyecto, utilizaremos Node.js.

