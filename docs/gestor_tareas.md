# Gestor de tareas
Un gestor de tareas es una herramienta de automatización que se utiliza en el
desarrollo de software para ejecutar tareas repetitivas o predefinidas de
forma automatizada. Estas tareas pueden ser, entre otras, compilación de
código, optimización de recursos, ejecución de pruebas u organización de
activos.

En este caso, debemos tener en cuenta que el gestor de dependencias elegido
es Yarn.

Las opciones que vamos a explorar son:
* [Gulp](#gulp)
* [Webpack](#webpack)
* [Grunt](#grunt)


## Criterios de elección
Vamos a establecer unos criterios para poder elegir la mejor opción para
nuestro proyecto.

* Rendimiento: Velocidad y eficiencia con la que se pueden ejecutar las tareas
definidas.
* Comunidad: Respaldo y apoyo que tiene el gestor de tareas por parte de otros
desarrolladores, que puede proporcionar soluciones rápidas a problemas comunes.
* Flexibilidad: Capacidad para adaptarse a diferentes necesidades y contextos.


## Gulp
Gulp es una herramienta de construcción (_build tool_) que permite definir y
ejecutar tareas automatizadas para diversas acciones, como compilar TypeScript
minificar archivos u optimizar imágenes.

### Características
**Amplia comunidad:** Tiene una comunidad activa y gran cantidad de plugins
disponibles que facilitan la automatización de tareas comunes en proyectos
TypeScript.

**Configuración basada en código:** Permite una mayor flexibilidad y
personalización en la automatización de tareas en comparación con herramientas
basadas en configuración.

**Integración con TypeScript:** Hay plugins específicos de Gulp para la
compilación y transpilación de TypeScript, lo que permite automatizar el
proceso de generación de JavaScript a partir del código TypeScript.

**Rendimiento y eficiencia:** Está diseñado para ser rápido y eficiente en la
ejecución de tareas.

## Webpack
### Características
**Potente y versátil:** Se utiliza principamente para la agrupación y
empaquetado de módulos activos, pero también puede realizar tareas de
construcción más amplias.

**Gestión de módulos:** Su capacidad para gestionar módulos es especialmente
valiosa en proyectos TypeScript, donde la modularidad es esencial. Puede
manejar la importación y exportación de módulos de TypeScript de manera
eficiente.

**Enrutamiento de activos:** Permite cargar y empaquetar vaios tipos de activos
como CSS, imágenes o fuentes. Es útil para optimizar y reducir las solicitudes
al servidor.

**Amplia comunidad:** Cuenta con una gran comunidad de desarrolladores y una
amplia variedad de complementos que pueden extender su funcionalidad según
las necesidades.

**Configuración basada en cógido:** Al igual que Gulp, utiliza una
configuración basada en código, lo que brinda un alto grado de personalización
y control sobre la automatización de tareas.

**Capacidad de carga en caliente:** Permite actualizar componentes o módulos en
tiempo real durante el desarrollo, lo que mejora la eficiencia del proceso de
desarrollo.

## Grunt
Grunt es una herramienta de automatización de tareas generalizada que te
permite definir y ejecutar tareas para una variedad de acciones, como
compilación, minificación o copia de archivos. Es adecuado para proyectos que
requieren una automatización de tareas básica y no necesariamente una gestión
de módulos compleja.

### Características
**Configuración basada en archivos:** Utiliza un archivo de configuración en
formato JavaScript o JSON (Gruntfile) para definir tareas y opciones de
configuración, lo que puede ser más fácil de configurar para proyectos simples.

**Amplio ecosistema de complementos:** Cuenta con una amplia cantidad de
complementos que cubren una variedad de tareas comunes de construcción y
automatización.

**Familiaridad:** Es una herramienta más antigua y ha sido utilizada en muchos
proyectos durante años.

## Conclusión
Para proyectos TypeScript como este, [Webpack](#webpack) es especialmente
adecuado cuando necesitas una gestión avanzada de módulos y optimización de
activos, mientras que [Grunt](#grunt) es una opción más simple y generalizada.
Por otro lado, [Gulp](#gulp) se encuentra en un punto intermedio y ofrece
flexibilidad en la automatización de tareas.

Como no este no es un proyecto que requiera mucha complejidad, utilizaremos
el gestor de tareas Gulp, que es más sencillo que Webpack y ofrece más
flexibilidad de que Grunt.
