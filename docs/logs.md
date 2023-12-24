# Sistemas de Logs
Los sistemas de logs son herramientas que permiten registrar información
relevante sobre el funcionamiento de una aplicación. Estos registros son
fundamentales para la depuración, el monitoreo y la comprensión del
comportamiento del sistema. Los sistemas de logs ofrecen niveles de
granularidad, permitiendo registrar desde información general hasta errores
críticos.

## Criterios
- **Compatibilidad**: Buscamos un sistema de logs que sea compatible con el
entorno de ejecución en el que trabajamos.
- **Mantenimiento**: Buscamos una biblioteca con una comunidad activa y con
actualizaciones frecuentes. Nos documentaremos con utilizando Snyk.
- **Formato**: Debemos tener en cuenta el formato de registro que nos ofrece
la biblioteca.

## Opciones
- Pino: https://github.com/pinojs/pino
- Winston: https://github.com/winstonjs/winston
- Log4js: https://github.com/log4js-node/log4js-node
- Bunyan: https://github.com/trentm/node-bunyan


### Pino
- Compatibilidad: Diseñado para ser rápido y eficiente en entornos Node.js,
compatible con TypeScript.
- Mantenimiento: Activa comunidad de desarrollo y actualizaciones frecuentes.
En [Snyk](https://snyk.io/advisor/npm-package/pino) puntuación de 94.
- Formato: Puede producir logs en formato JSON o formato plano.

### Winston
- Compatibilidad: Ampliamente utilizado en el ecosistema Node.js, compatible
con TypeScript.
- Mantenimiento: Comunidad activa y mantenimiento regular.
En [Snyk](https://snyk.io/advisor/npm-package/winston) puntuación de 92.
- Formato: Configurable, permite varios formatos de logs.

### Log4js
- Compatibilidad: Compatible con Node.js y TypeScript.
- Mantenimiento: Comunidad activa, con actualizaciones periódicas.
En [Snyk](https://snyk.io/advisor/npm-package/log4js) puntuación de 82.
- Formato: Configurable, permite diferentes formatos de logs.

### Bunyan
- Compatibilidad: Diseñado para ser rápido en entornos Node.js, compatible con
TypeScript.
- Mantenimiento: Mantenimiento regular, aunque su última actualización en GiHub
fue hace un año.
En [Snyk](https://snyk.io/advisor/npm-package/bunyan) puntuación de 62.
- Formato: Estructurado en formato JSON.

## Decisión final
Dada la necesidad de compatibilidad con Docker, eficiencia, niveles de logs,
mantenimiento y formato JSON, se decide optar por Pino como sistema de logs.
Pino es conocido por su rendimiento, bajo consumo de recursos y su capacidad
para trabajar eficientemente en entornos de contenedores, cumpliendo así con los
criterios específicos establecidos para este proyecto.

Para más información sobre las configuraciones posibles de Pino, podemos
consultar https://getpino.io/#/docs/api?id=logger