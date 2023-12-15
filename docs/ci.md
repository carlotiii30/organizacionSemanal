# Sistemas de Integración Continua
El objetivo de la integración continua (CI) es detectar y abordar problemas de
integración temprano en el ciclo de vida del desarrollo, lo que ayuda a
reducir los errores y mejorar la calidad del software.

## Criterios
- **Gratuidad**: Buscamos que sea gratuito, de código abierto.
- **Compatibilidad con Docker**: Debe poder integrarse y trabajar con
contenedores Docker.
- **Compatibilidad con Github**: Debe poder integrarse y trabajar de manera
efectiva con repositorios alojados en Github.

## Opciones
- Jenkins: https://www.jenkins.io
- Travis CI: https://www.travis-ci.com
- CircleCI: https://circleci.com
- GitLab CI/CD: https://docs.gitlab.com/ee/ci/
- Semaphore CI: https://semaphoreci.com

### Jenkins
- Gratuidad: Gratuito y de código abierto.
- Compatibilidad con Docker: Tiene soporte para Docker.
- Compatibilidad con Github: Bien integrado con complementos.

### Travis CI
- Gratuidad: Planes gratuitos para proyectos de código abierto.
- Compatibilidad con Docker: Soporte nativo para Docker.
- Compatibilidad con Github: Estrechamente integrado.

### CircleCI
- Gratuidad: Planes gratuitos con ciertas limitaciones.
- Compatibilidad con Docker: Compatible con Docker.
- Compatibilidad con Github: Bien integrado.

### GitLab CI/CD
- Gratuidad: Versión de código abierto gratuita.
- Compatibilidad con Docker: Integración nativa con Docker.
- Compatibilidad con Github: Es posible integrarlo con repositorios de GitHub.

### Semaphore CI
- Gratuidad: Planes gratuitos con ciertas limitaciones.
- Compatibilidad con Docker: Integración nativa con Docker.
- Compatibilidad con Github: Se puede integrar con repositorios de GitHub.

## Decisión final
Considerando la gratuidad y la integración con Docker y Github, las mejores
opciones podrían ser [Travis CI](#travis-ci) y [GitLab CI/CD](#gitlab-cicd).

Por una parte, como nuestro proyecto es de código abierto, Travis CI nos ofrece
planes gratuitos y, además, tiene una integración estrecha con GitHub.

Por otro lado, tenemos GitLab CI/CD, que ofrece la ventaja de tener una
integración nativa con Docker.

## Versiones
Como podemos ver en la [página oficial de Node.js](https://nodejs.org/en), la
versión recomendada para la mayoría de usuarios es la 20, que tiene soporte a
largo plazo, mientras que la actual es la 21, que incluye las últimas
características. Por tanto, vamos a testear estas dos versiones.

Adicionalmente, vamos a probar la versión en desarrollo.