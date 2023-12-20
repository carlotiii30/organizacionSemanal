# Sistemas de Configuración
Un "sistema de configuración" se refiere a un conjunto organizado de reglas,
parámetros, opciones o ajustes que se utilizan para definir y personalizar el
comportamiento de un sistema o aplicación. Este sistema permite modificar las
características y el funcionamiento de la aplicación según las necesidades del
usuario o del entorno en el que se ejecuta.

## Criterios
- **Seguridad**: Debe manejar información sensible de manera segura.
- **Flexibilidad**: Debe poder adaptarse a cambios en la infraestructura o
entorno de ejecución.
- **Centralización**: Debe permitir la centralización de las variables de
entorno para facilitar la gestión y la coherencia en entornos distribuidos.
- **Gestión de Entorno de Docker**: Debe ser compatible y enficiente en
contenedores Docker.

## Opciones
- Dotenv: https://github.com/motdotla/dotenv
- Config: https://github.com/lorenwest/node-config


### Dotenv
- Seguridad: Maneja variables de entorno, que pueden incluir información
sensible.
- Flexibilidad: Proporciona flexibilidad al cargar variables de entorno desde
archivos.
- Centralización: Permite centralizar las variables de entorno en un archivo
`.env`.
- Gestión de Entorno de Docker: Es compatible con Docker y puede integrarse
eficientemente.

### Config
- Seguridad: Permite definir archivos de configuración con estructuras
específicas y no maneja directamente información sensible.
- Flexibilidad: Soporta diferentes formatos de archivos de configuración (JSON,
YAML, JavaScript).
- Centralización: Ofrece la posibilidad de centralizar configuraciones en
archivos específicos y estructurados.
- Gestión de Entorno de Docker: Es compatible y puede ser configurado para
manejar variables de entorno.

## Decisión final
Teniendo en cuenta que estamos trabajando en un proyecto pequeño, la solución
más fácil de implementar para la carga de variables de entorno en entornos de
desarrollo es Dotenv.