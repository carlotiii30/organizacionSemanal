# Metodología
Una metodología de desarrollo de software es un enfoque estructurado o conjunto
de prácticas, procesos, reglas y principios que guían el desarrollo de software
a lo largo de su ciclo de vida. Estas metodologías proporcionan un marco de
trabajo para planificar, estructurar y controlar el proceso de desarrollo, con
el objetivo de mejorar la calidad del software, aumentar la eficiencia y
gestionar de manera efectiva los recursos y el tiempo.

Vamos a explorar dos opciones:
* [TDD](#tdd)
* [DDD](#ddd)

## TDD
TDD - Test Driven Development es una metodología que se centra en escribir
tests antes del propio código.

Su ciclo es el siguiente:
1. Red: Se escribe un test que falla porque la funcionalidad aún no está
implementada.
2. Green: Se implementa el código mínimo necesario para que pase el test.
3. Refactor: Se mejora el código sin cambiar el comportamiento.

### Ventajas
**Mejora la calidad del código**: Al escribir los tests antes, se asegura de
que el código funcione según lo esperado.

**Retroalimentación**: Los tests automáticos proporcionan retroalimentación
inmediaata sobre cualquier cambio en el código.

**Errores en producción**: Se reducen significativamente los errores que llegan
a producción, ya que se detectan y se corrigen en una etapa temprana.

## BDD
BDD - Behavior Driven Development es una metodología que se enfoca en la
colaboración dentre desarrolladores, testers y stakeholders. La principal idea
es describir el comportamiento del sistema en un lenguaje natural comprensible
para todos los involucrados en el proyecto.

### Ventajas
**Comportamiento**: Se centra en el comportamiento del sistema desde la
perspectiva del usuario final, ayudando a alinear el desarrollo con las
necesidades del negocio y del usuario.

**Automatización de pruebas**: Las especificaciones escritas en lenguaje
natural pueden convertise en pruebas automatizadas, lo que garantiza una
ejecución regular y repetible de los tests.

**Detección de problemas**: Al escribir las especififcaciones de comportamiento
antes de implementar el código, los problemas pueden detectarse en una etapa
temprana del proyecto.

**Reutilización**: Las especificaciones escritas en lenguaje natural pueden
reutilizarse para diferentes propósitos.

## Decisión final
Para este proyecto usaremos TDD, ya que nuestro objetivo es buscar el producto
mínimo viable. Sin embargo, estos no son mutuamente excluyentes, por tanto, si,
en algún momento, necesitamos escribir pruebas a nivel superior que describan
el comportamiento general del sistema podremos utilizar BDD.


# Herramientas para los tests
Tenemos que elegir un assert, un test runner y un CLI.

## Test runner
Opciones:
* Jest: https://jestjs.io
* Mocha: https://mochajs.org

### Jest
Jest es un framework de tests para JavaScript y TypeScript desarrollado por
Facebook. Es especialmente conocido por su simplicidad y configuración "listo
para usar".

**Características**
* Soporte para tests de unidades, integración y extremo a extremo.
* Ejecución paralela de pruebas para mayor velocidad.
* Integración con TypeScript.
* API de aserciones incorporada.
* Generación de informes de cobertura de código.
* Snapshot testing para detectar cambios no deseados en la salida.

### Mocha
Mocha es otro popular framework de tests para JavaScript y Node.js. A
diferencia de Jest, Mocha es más flexible y permite la utilización de
bibliotecas de aserciones y bibliotecas de manipulación del flujo de control
de tests.

**Características**
* Admite pruebas unitarias y de integración.
* Soporte para aserciones, pero permite la elección de bibliotecas como Chai.
* Se puede usar con Node.js y en el navegador.
* Configuración flexible y extensible.
* Informes detallados y generación de informes de cobertura.

### Decisión final
Para este proyecto utilizaremos Jest, ya que es especialmente fuerte en
proyectos basados en TypeScript.

## Assert
Opciones:
* Chai: https://www.chaijs.com
* Assert (módulo de Node.js): https://nodejs.org/en
* Jest: https://jestjs.io

### Chai
Chai es una biblioteca de aserciones que se puede utilizar con Mocha y otros
frameworks de pruebas. Proporciona una sintaxis clara y expresiva para realizar
afirmaciones sobre el código.

**Características**
* Ofrece múltiples estilos de aserciones, como should, expect y assert.
* Soporte para pruebas asíncronas.
* Integración con varios frameworks de tests.
* Posibilidad de extender con plugins.

### Assert
El módulo 'assert' es una biblioteca de aserciones integrada en Node.js.

**Características**
* Al ser parte del núclero de Node.js, no requiere instalación adicional.
* Sintaxis simple para realizar aserciones básicas.
* Adecuado para pruebas unitarias y de integración en entornos de Node.js.

Debemos tener en cuenta que es especialmente útil en entornos como el nuestro,
[Node.js](runtime.md), pero no ofrece la riqueza de otras bibliotecas externas.

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