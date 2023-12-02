# Metodología
Una metodología de desarrollo de software es un enfoque estructurado o conjunto
de prácticas, procesos, reglas y principios que guían el desarrollo de software
a lo largo de su ciclo de vida.

Para esta proyecto utilizaremos la metodología TDD, que se centra en escribir
tests antes del propio código; y BDD, que describe las pruebas en un lenguaje
natural que entienden todos los equipos de un proyecto.


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


### Decisión final
Para este proyecto utilizaremos Jest, ya que es especialmente fuerte en
proyectos basados en TypeScript y cumple con todos los
[criterios](#criterios-1) establecidos.


## Biblioteca de aserciones
Opciones:
* Chai: https://www.chaijs.com
* Biblioteca de aserciones del test runner elegido.

### Chai
Chai es una biblioteca de aserciones que se puede utilizar con Mocha y otros
frameworks de pruebas. Proporciona una sintaxis clara y expresiva para realizar
afirmaciones sobre el código.

**Características**
* Ofrece múltiples estilos de aserciones, como should, expect y assert.
* Soporte para pruebas asíncronas.
* Integración con varios frameworks de tests.
* Posibilidad de extender con plugins.

### Decisión final
Debemos tener en cuenta el test runner elegido. Como la decisión final ha sido
[Jest](#jest), podemos aprovechar las capacidades de aserciones integradas que
nos ofrece sin agregar una biblioteca de aserciones externa.

## CLI
Todas las [test runner](#test-runner) investigados tienen su propia CLI. Sin
embargo, para esta decisión, deberemos tener en cuenta solo a uno de ellos:
Jest, que es el vamos a utilizar.

Además, Yarn, el gestor de dependencias, también tiene su interfaz de línea de
comandos integrada. Por tanto, podríamos utilizar cualquiera de las dos para
este proyecto.

La CLI de [Yarn](gestor_dependencias.md) es bastante flexible y puede adaptarse
a las necesidad de este proyecto, por tanto, será la que utilizaremos.