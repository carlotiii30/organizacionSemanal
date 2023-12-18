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
- **Niveles de logs**: Debemos verificar si la biblioteca admite varios niveles
de logs.
- **Soporte de contenedores**: Debe estar optimizada para su uso en Docker.
- **Mantenimiento**: Buscamos una biblioteca con una comunidad activida y con
actualizaciones frecuentes.
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
- Niveles de Logs: Admite múltiples niveles de logs, desde información hasta
emergencia.
- Soporte de Contenedores: Ligero y optimizado para entornos de contenedores.
- Mantenimiento: Activa comunidad de desarrollo y actualizaciones frecuentes.
- Formato: Puede producir logs en formato JSON o formato plano.

### Winston
- Compatibilidad: Ampliamente utilizado en el ecosistema Node.js, compatible
con TypeScript.
- Niveles de Logs: Admite varios niveles de logs, personalizables.
- Soporte de Contenedores: Se puede utilizar en entornos de contenedores,
aunque puede ser más pesado en comparación con Pino.
- Mantenimiento: Comunidad activa y mantenimiento regular.
- Formato: Configurable, permite varios formatos de logs.

### Log4js
- Compatibilidad: Compatible con Node.js y TypeScript.
- Niveles de Logs: Soporta varios niveles de logs, con configuración flexible.
- Soporte de Contenedores: Puede ser utilizado en entornos de contenedores.
- Mantenimiento: Comunidad activa, con actualizaciones periódicas.
- Formato: Configurable, permite diferentes formatos de logs.

### Bunyan
- Compatibilidad: Diseñado para ser rápido en entornos Node.js, compatible con
TypeScript.
- Niveles de Logs: Admite varios niveles de logs, estructurados en formato JSON.
- Soporte de Contenedores: Ligero y adecuado para entornos de contenedores.
- Mantenimiento: Mantenimiento regular, aunque su última actualización en GiHub
fue hace un año.
- Formato: Estructurado en formato JSON.

## Decisión final
Dada la necesidad de compatibilidad con Docker, eficiencia, niveles de logs,
mantenimiento y formato JSON, se decide optar por Pino como sistema de logs.
Pino es conocido por su rendimiento, bajo consumo de recursos y su capacidad
para trabajar eficientemente en entornos de contenedores, cumpliendo así con los
criterios específicos establecidos para este proyecto.

Para más información sobre las configuraciones posibles de Pino, podemos
consultar https://getpino.io/#/docs/api?id=logger