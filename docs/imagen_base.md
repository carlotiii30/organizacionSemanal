# Imagen base para contenedor de pruebas
Para nuestro proyecto necesitamos una imagen de contenedor, que servirá como
punto de partda para ejecutar pruebas automatizadas en un entorno aislado.
Utilizaremos [Docker Hub](https://hub.docker.com).

## Criterios
- **Ligereza**: Una imagen más ligera tiene un tamaño más pequqeño en
comparación con otras. Es beneficioso en términos de eficiencia de
almacenamiento y velocidad de descarga.

- **Rapidez**: Una imagen rápida debería iniciar y ejecutar la aplicación de
manera eficiente.

- **Compatibilidad**: La imagen debe ser compatible con las herramientas que
estamos utilizando: [herramientas](./herramientas_test.md).

- **Mantenimiento y comunidad**: Las imágenes populares y bien mantenidas
reciben actualizaciones y correcciones de manera regular.

- **Yarn pre-instalado**: La imagen debe tener yarn preinstalado.

## Velocidad y tamaño
La velocidad de las imágenes de Docker se pueden medir en términos de: tiempo
de construcción y tamaño de la imagen resultante.

- [Tiempo de construcción]
- [Tamaño]

## Opciones
- Alpine Linux.
- CentOS. -> Deprecated.
- Ubuntu.
- Node.

### Alpine Linux
- Ligereza: Ligera.
- Rapidez: Rápida.
- Compatibilidad: Compatible.
- Mantenimiento y comunidad: Comunidad activa y mantenida.
- Yarn preinstalado: No.

### Ubuntu
- Ligereza: Moderada.
- Rapidez: Buena.
- Compatibilidad: Compatible.
- Mantenimiento y comunidad: Comunidad más grande y activa. Ampliamente
mantenida y regularmente actualizada.
- Yarn preinstalado: No.

### Node
- Ligereza: Ligera.
- Rapidez: Rápida.
- Compatibilidad: Compatible.
- Mantenimiento y comunidad: Comunidad activa y mantenida.
- Yarn preinstalado: Sí.


## Decisión final
La opción que satisface todos nuestros criterios es Node. En particular,
vamos a utilizar node:20-buster-slim, que es la última versión de node basada
en Debian 10 (Buster) y que utiliza una versión más liviana y optimizada de los
componentes necesarios para ejecutar Node.js.