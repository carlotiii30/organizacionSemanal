# Metodología
Una metodología de desarrollo de software es un enfoque estructurado o conjunto
de prácticas, procesos, reglas y principios que guían el desarrollo de software
a lo largo de su ciclo de vida.

Vamos a explorar tres opciones:
* [TDD](#tdd)
* [BDD](#bdd)
* [ATDD](#atdd)

Para poder tomar la mejor decisión para nuestro proyecto, primero
investigaremos sobre cómo funciona cada una de estas metodologías, y, después,
compararemos las características que ofrecen con los [criterios](#criterios)
establecidos.

## Criterios
- **Enfoque**: Manera específica en que se realiza una actividad.
- **Propósito**: Objetivo detrás de la actividad.

## TDD
TDD - Test Driven Development es una metodología que se centra en escribir
tests antes del propio código.

### Características
**Enfoque**:
- Se centra en escribir pruebas unitarias antes de escribir el código de
producción.
- Ciclo red-green-refactor: escribir una prueba que falle, hacer que pase y
luego refactorizar si es necesario.

**Propósito**:
- Garantizar que el código sea confiable y cumpla con los requisitos al
escribir pruebas unitarias antes de implementar el código de producción.
- Mejorar la calidad del código y facilitar el mantenimiento.

## BDD
BDD - Behavior Driven Development es una metodología que se enfoca en la idea
de describir el comportamiento del sistema en un lenguaje natural comprensible
para todos los involucrados en el proyecto.

### Características
**Enfoque**:
- Se centra en describir el comportamiento del sistema desde la perspectiva del
usuario final.
- Uso del lenguaje natural para escribir especificaciones que describan el
comportamiento esperado.

**Propósito**:
-  Mejorar la colaboración entre los miembros del equipo y garantizar que el
sistema se comporte según las expectativas del usuario final.
- Facilitar la comprensión compartida del comportamiento del sistema.

## ATDD
ATDD - Acceptance Test-Driven Development es una metodología de desarrollo de
software que se centra en la colaboración entre los desarrolladores, los
testers y los stakeholders del proyecto, con el objetivo de garantizar que las
características desarrolladas satisfagan los requisitos del negocio.

### Características
**Enfoque**:
- Se centra en la colaboración entre equipos y en validar que las
funcionalidades implementadas cumplan con los requisitos del usuario.
- Definición de pruebas de aceptación antes de implementar el código.

**Propósito**:
- Validar que las funcionalidades implementadas cumplan con los requisitos del
usuario y del negocio.
- Mejorar la comunicación y la colaboración entre desarrolladores, testers y
stakeholders.

## Decisión final
Para este proyecto usaremos TDD, ya que nuestro objetivo es buscar el producto
mínimo viable, y con el ciclo red-green-refactor podemos lograr esto de la
forma más eficiente.


# Herramientas para los tests
Tenemos que elegir un assert, un test runner y un CLI.

## Criterios
- **Compatibilidad**: Buscamos herramientas que sean compatibles con nuestro
lenguaje de programación [TypeScript](../iv.yaml)
- **Aserciones**: Buscamos un test runner que tenga biblioteca de aserciones
propia, o que sea compatible con alguna de ellas.
- **Capacidad de paralelización**: Ejecutar pruebas en paralelo puede acelerar
significativamente el proceso de prueba.


## Test runner
Opciones:
* Jest: https://jestjs.io
* Mocha: https://mochajs.org
* Jasmine: https://jasmine.github.io
* Cypress: https://www.cypress.io

### Jest
**Características**
* Ejecución paralela de pruebas para mayor velocidad.
* Integración con TypeScript.
* API de aserciones incorporada.

### Mocha
**Características**
* Compatible con TypeScript.
* No incluye biblioteca de aserciones, pero permite la elección de bibliotecas.
* No tiene capacidad de paralelización, pero puede aprovechar herramientas
adicionales.

### Jasmine
**Características**
* Tiene soprte para TypeScript.
* Incluye su propia biblioteca de aserciones.
* No tiene capacidad de paralelización, pero puede aprovechar herramientas
adicionales.

### Cypress
**Características**
* Tiene soprte para TypeScript.
* Incluye su propia biblioteca de aserciones.
* Tiene capacidad de paralelización en su servicio de ejecución en la nube.

### Decisión final
Para este proyecto utilizaremos Jest, ya que es especialmente fuerte en
proyectos basados en TypeScript.


## Assert
Opciones:
* Chai: https://www.chaijs.com
* Frameworks integrados.

### Chai
Chai es una biblioteca de aserciones que se puede utilizar con Mocha y otros
frameworks de pruebas. Proporciona una sintaxis clara y expresiva para realizar
afirmaciones sobre el código.

**Características**
* Ofrece múltiples estilos de aserciones, como should, expect y assert.
* Soporte para pruebas asíncronas.
* Integración con varios frameworks de tests.
* Posibilidad de extender con plugins.

### Frameworks integrados
Algunos test runners llevan integradas bibliotecas de aserciones, nosotros
podríamos utilizar:
- Node.js
- Jest
- Jasmine
- Cypress

### Decisión final
Debemos tener en cuenta el test runner elegido. Si la elección hubiese sido
[Mocha](#mocha), probablemente habríamos optado por Chai. Sin embargo, como la
decisión final ha sido [Jest](#jest), podemos aprovechar las capacidades de
aserciones integradas que nos ofrece sin agregar una biblioteca de aserciones
externa.

## CLI
[Yarn](gestor_dependencias.md) proporciona una interfaz de línea de comandos
que permite realizar diversas tareas relacionadas con la gestión de paquetes,
incluyendo la ejecución de scripts personalizados, como los scripts de prueba.

La CLI de Yarn es bastante flexible y puede adaptarse a las necesidad de este
proyecto, por tanto, será la que utilizaremos.