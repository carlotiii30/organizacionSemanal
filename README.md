# Problema de Organización de la Agenda Semanal

## Descripción del problema

Una persona necesita una solución para organizar, de manera eficiente, su semana, ya
que tiene múltiples actividades y compromisos. Estos compromisos pueden
variar ampliamente según las circunstancias individuales, pero pueden incluir
actividades como clases universitarias, reuniones, citas médicas o ejercicio físico.

Debemos tener en cuenta ciertos aspectos:
- Las citas periódicas mensuales médicas programadas son inamovibles.
- Las horas dedicadas al ejercicio físico se adecuarán a la carga de
trabajo de esa semana, siendo más si hay más tiempo libre y menos si es
posible ir, pero siempre teniendo en cuenta un número mínimo de horas
semanales.
- Las reuniones pueden cambiar de fecha y hora dentro de esa misma semana,
pero siempre que existan deben realizarse.


## Documentos

### Configuración
[Configuración del repositorio](https://github.com/carlotiii30/organizacionSemanal/blob/Objetivo-0/configuracion.png)

### Historias de usuario
[Historias de usuario](./docs/historias_usuario.md)

### Milestones
[Milestones](./docs/milestones.md)

### Toolchain
* [Gestor de dependencias](./docs/gestor_dependencias.md)
* [Gestor de tareas](./docs/gestor_tareas.md)
* [Runtime](./docs/runtime.md)

### Herramientas para tests y metodología
[Herramientas para tests](./docs/herramientas_test.md)

### Imagen base para contenedor de pruebas
[Imagen base](./docs/imagen_base.md)

### Sistemas de itegración continua
[Sistemas CI](./docs/ci.md)

## Órdenes

### Comprobación de sintaxis
Para la comprobación de la sintaxis del código de nuestro proyecto, deberemos
ejecutar el siguiente comando:
```bash
yarn check
```

### Ejecución de test
Para la ejecución de tests, el comando que utilizaremos será:
```bash
yarn test
```

### Contenedor de test
Para construir la imagen del contenedor usaremos el comando:
```bash
docker build -t carlotiii30/organizacionsemanal .
```

Y para ejecutarla:
```bash
docker run  -tv `pwd`:/app/test carlotiii30/organizacionsemanal
```

La imagen se encuentra en [Docker Hub](https://hub.docker.com/r/carlotiii30/organizacionsemanal)