# Gestor de dependencias
La administración de dependencias es el proceso de automatización de la
instalación, actualización, configuración y eliminación de bibliotecas,
paquetes y herramientas de las que depende una aplicación. Cada lenguaje
de programación tiene sus propias herramientas de gestión de dependencias,
por tanto, deberemos tener en cuenta que el lenguaje de programación que
vamos a utilizar en este proyecto es TypeScript.

Las opciones que vamos a explorar son:
* [Yarn](#yarn)
* [NPM](#npm)


## Criterios de elección
Vamos a establecer unos criterios para poder elegir la mejor opción para
nuestro proyecto.

* Seguridad: Capacidad de garantizar que las bibliotecas y paquetes utilizados
no contengan vulnerabilidades conocidas.
* Estabilidad: Capacidad de garantizar que las versiones de las bibliotecas y
paquetes utilizados en un proyecto se mantengan constantes.
* Simpleza: Claridad en el proceso de añadir, eliminar y actualizar paquetes.


## Yarn
### Historia
Es un gestor de dependencias creado por Facebook en colaboración con Exponent,
Google y Tilde. Surge en 2016 con un claro enfoque: seguridad y velocidad.

Aparece cuando desarrolladores que utilizan npm solicitan mejoras a la
comunidad que no llegaban nunca, con la intención de generar una herramienta
que garantizase la fluidez, la rapidez y la seguridad.

### Características
**Rápido:** Almacena en caché todos los paquetes que ha descargado, para no
tener que volver a descargarlos. Además, hace casi todo de forma concurrente,
maximizando el uso de los recursos.

**Fiable:** Al utilizar un formato de archivo de bloqueo detallado y un
algoritmo determinista para las operaciones de instalación, garantiza que
cualquier instalación que funcione en un sistema funcionará exactamente igual
en cualquier otro.

**Seguro:** Emplea sumas de comprobación para verificar la integridad de cada
paquete instalado antes de ejecutar su código.

**Modo sin conexión:** Un paquete puede volver a instalarse sin conexión a
internet si ya ha sido instalado antes.

**Determinista:** Independientemente del orden de instalación, las mismas
dependencias se instalarán de la misma manera en cualquier máquina.

**Modo plano:** Resuelve las versiones no coincidentes de las dependencias a
una sola versión para evitar duplicados.

**Limpieza automática:** Permite eliminar automáticamente cualquier
dependencia en el fichero .yarnclean después de agregar o eliminar
dependencias. Es una forma de reducir el tamaño de node_modules.


## NPM
### Historia
Node Package Management es uno de los gestores de dependencias más utilizados
en Javascript. Fue lanzado en 2014, y desde la versión 0.6.3 de NodeJS, se
instala por defecto.

Existen dos maneras de usar este gestor:

* Global: Es muy usada para instalar aplicaciones a nivel de sistema.
* Local: Permite asociar qué dependencias y versiones funcionarán en nuestro
proyecto.

### Características
**Amplia biblioteca de paquetes:** Al ser el gestor de paquetes original para
Node.js y JavaScript, cuenta con un amplio repositorio de paquetes que abarca
una extensa gama de funcionalidades.

**Sencillez:** Permite instalar, gestionar y actualizar dependencias de manera
sencilla. Se pueden especificar en el archivo 'package.json'.

**Versionado semántico:** Facilita la especificación de las versiones de las
bibliotecas que se desean utilizar en un proyecto.

**Resolución de dependencias:** Se encarga de resolver las dependencias y
asegurarse de que las versiones sean compatibles entre sí.

**Gran comunidad y soporte:** Facilita la obtención de ayuda, solución de
problemas y acceso a una amplia gama de recursos y paquetes desarrollados por
la comunidad.

**Interfaz de línea de comandos:** Permite interactuar con facilidad con el
sistema de gestión de paquetes.

## Conclusión
Tanto [Yarn](#yarn) como [npm](#npm) tienen sus puntos fuertes y débiles,
mientras que npm tiene una comunidad muy grande y activa que proporciona
soporte y actualizaciones constantes, influyendo en la seguridad; Yarn destaca
por su velocidad y capacidad de bloquear versiones, lo que contribuye a la
estabilidad.

En este proyecto, vamos a utilizar Yarn.
