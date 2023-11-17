# Gestor de dependencias
La administración de dependencias es el proceso de automatización de la
instalación, actualización, configuración y eliminación de bibliotecas,
paquetes y herramientas de las que depende una aplicación. Cada lenguaje
de programación tiene sus propias herramientas de gestión de dependencias,
por tanto, deberemos tener en cuenta que el lenguaje de programación que
vamos a utilizar en este proyecto es TypeScript.

Las opciones que vamos a explorar son:
* [Yarn](#yarn): https://yarnpkg.com
* [NPM](#npm): https://www.npmjs.com
* [PNPM](#pnpm): https://pnpm.io/es/


## Criterios de elección
Vamos a establecer unos criterios para poder elegir la mejor opción para
nuestro proyecto.

* Seguridad: Capacidad de garantizar que las bibliotecas y paquetes utilizados
no contengan vulnerabilidades conocidas.
* Estabilidad: Capacidad de garantizar que las versiones de las bibliotecas y
paquetes utilizados en un proyecto se mantengan constantes.
* Comunidad: Cantidad de recursos y paquetes desarrollados, y ayuda en la
resolución de problemas comunes.


## Yarn
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


## PNPM
**Espacio**: Comparte dependencias entre proyectos, no las duplica, si no que
las almacena de forma global y las enlaza simbólicamente a cada proyecto que
las necesita.

**Lockfile**: Admite un archivo de bloqueo, pnpm-lock.yaml, que garantiza que
las versiones de las dependencias sean coherentes en diferentes entornos.

**Soporte para Workspaces**: Permite gestionar múltiples proyectos dentro de un
único repositorio.

**Reducción de uso de red**: Al almacenar las dependencias de forma global, se
reduce el uso de red al descargar y almacenar los paquetes.

**Comandos adicionales**: Ofrece comandos adicionales como pnpm recursive, que
permite ejecutar comandos en todos los proyectos en un entorno monorepo.

## Conclusión
Tanto [Yarn](#yarn) como [npm](#npm) y [pnpm](#pnpm) tienen sus puntos fuertes
y débiles, mientras que npm tiene una comunidad muy grande y activa que
proporciona soporte y actualizaciones constantes, influyendo en la seguridad;
Yarn destaca por su velocidad y capacidad de bloquear versiones, lo que
contribuye a la estabilidad. Por otro lado, pnpm tiene comandos adicionales que
pueden ser de gran utilidad y una gran gestión del espacio.

En este proyecto, vamos a utilizar Yarn.
