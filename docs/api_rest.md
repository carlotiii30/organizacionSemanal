# Framework API REST
Un framework para API REST es una herramienta de desarrollo que proporciona un
conjunto de abstracciones, funcionalidades y patrones predefinidos para
simplificar y acelerar la creación de interfaces de programación de aplicaciones
(API) que sigan los principios y estándares de la arquitectura REST
(Representational State Transfer).

## Criterios
- **Compatibilidad**: Buscamos un framework de TypeScript.
- **Comunidad y soporte**: Una comunidad activa implica mayor facilidad a la
hora de encontrar soluciones. Además, buscamos que esté actualizado.
- **Costo**: Debería ser gratuito.
- **Verbos HTTP**: Facilidad para la declaración de los verbos HTTP asociados
al CRUD.

## Opciones
- Nest: https://nestjs.com
- Koa: https://koajs.com
- LoopBack: https://loopback.io
- Adonis: https://adonisjs.com

### Nest
- Compatibilidad: Totalmente compatible, ya que está construido desde cero con
TypeScript.
- Comunidad y soporte: Comunidad activa y creciente.
- Costo: Gratuito y de código abierto.
- Verbos HTTP: Utiliza decoradores para asociar controladores y rutas con los
verbos HTTP.

### Koa
- Compatibilidad: Necesita una configuración adicional para la integración con
TypeScript.
- Comunidad y soporte: Comunidad activa.
- Costo: Gratuito y de código abierto.
- Verbos HTTP: La definición de verbos HTTP se basa en cómo estructuras la
aplicaión utilizando middlewares.

### LoopBack
- Compatibilidad: Totalmente compatible, construido con TypeScript.
- Comunidad y soporte: Comunidad activa y soporte de IBM.
- Costo: Gratuito y de código abierto.
- Verbos HTTP: Ofrece un generador de API que facilita la creación de rutas y
operaciones CRUD.

### Adonis
- Compatibilidad: Tiene soporte para TypeScript.
- Comunidad y soporte: Comunidad activa.
- Costo: Gratuito y de código abierto.
- Verbos HTTP: Utiliza controladores para gestionar las rutas y los verbos HTTP.

## Decisión final
Considerando los criterios, para este proyecto utilizaremos Nest, ya que los
decoradores que utiliza para asociar controladores y rutas con los verbos HTTP
simplifican el desarrollo.