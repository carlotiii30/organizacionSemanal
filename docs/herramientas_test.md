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

## DDD
DDD - Domain Driven Design es una metodología que se enfoca en entender y
resolver complejidades del diseño en el dominio del problema. Pone un énfasis
particular en la compresión del dominio del problema.

### Ventajas
**Comprensión**: La comprensión del dominio ayuda a reflejar con mayor
precisión las necesidades y la lógica del negocio.

**Modelado**: Propone un modelado centrado en el dominio, que permite crear un
modelo de dominioque refleje de manera más precisa la realidad del negocio,
facilitando la comprensión y mantenimiento del código.

**Bounded Context**: Evita conflictos al definir claramente el significado de
términos y conceptos en contextos específicos, permitiendo mayor modularidad
y escalabilidad.

## Decisión final
Para este proyecto usaremos TDD, ya que nuestro objetivo es buscar el mínimo
producto viable.