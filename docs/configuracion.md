# Sistemas de Configuración
Un "sistema de configuración" se refiere a un conjunto organizado de reglas,
parámetros, opciones o ajustes que se utilizan para definir y personalizar el
comportamiento de un sistema o aplicación. Este sistema permite modificar las
características y el funcionamiento de la aplicación según las necesidades del
usuario o del entorno en el que se ejecuta.

## Criterios
- **Flexibilidad**: Debe poder adaptarse a cambios en la infraestructura o
entorno de ejecución.
- **Centralización**: Debe permitir la centralización de las variables de
entorno para facilitar la gestión y la coherencia en entornos distribuidos.
- **Gestión de Entorno de Docker**: Debe ser compatible y enficiente en
contenedores Docker.
- **Limitaciones**: Debemos buscar limitaciones de las bibliotecas.

## Opciones
- Dotenv: https://github.com/motdotla/dotenv
- Config: https://github.com/lorenwest/node-config


### Dotenv
- Flexibilidad: Proporciona flexibilidad al cargar variables de entorno desde
archivos.
- Centralización: Permite centralizar las variables de entorno en un archivo
`.env`.
- Gestión de Entorno de Docker: Es compatible con Docker y puede integrarse
eficientemente.
- Puntuación en [Snyk](https://snyk.io/advisor/npm-package/dotenv): 86.
- Limitaciones: Solo trabaja con ficheros de entorno.

### Config
- Flexibilidad: Soporta diferentes formatos de archivos de configuración (JSON,
YAML, JavaScript).
- Centralización: Ofrece la posibilidad de centralizar configuraciones en
archivos específicos y estructurados.
- Gestión de Entorno de Docker: Es compatible y puede ser configurado para
manejar variables de entorno.
- Puntuación en [Snyk](https://snyk.io/advisor/npm-package/config): 80.
- Limitaciones: Ninguna que afecte a nuestro proyecto.

## Decisión final
A pesar de las limitaciones, teniendo en cuenta que estamos trabajando en un
proyecto pequeño, la biblioteca que vamos a utilizar es Dotenv, ya que es la
más fácil de implementar.