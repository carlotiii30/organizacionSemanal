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

## Opciones
- Alpine Linux.
- Debian Slim.
- CentOS. -> Deprecated.
- Fedora.
- Ubuntu.
- Arch Linux.
- Rocky Linux.
- Node.

### Alpine Linux
- Ligereza: Muy ligera.
- Rapidez: Rápida.
- Compatibilidad: Compatible.
- Mantenimiento y comunidad: Comunidad activa y mantenida.
- Yarn preinstalado: No.

### Debian Slim
- Ligereza: Ligera.
- Rapidez: Buena.
- Compatibilidad: Compatible.
- Mantenimiento y comunidad: Gran comunidad y sólido mantenimiento.
- Yarn preinstalado: No.

### Fedora
- Ligereza: Moderada.
- Rapidez: Buena.
- Compatibilidad: Compatible.
- Mantenimiento y comunidad: Comunidad activa y ciclo de vida de soporte
establecido.
- Yarn preinstalado: No.

### Ubuntu
- Ligereza: Moderada.
- Rapidez: Buena.
- Compatibilidad: Compatible.
- Mantenimiento y comunidad: Comunidad más grande y activa. Ampliamente
mantenida y regularmente actualizada.
- Yarn preinstalado: No.

### Arch Linux
- Ligereza: Variable, depende de la configuración.
- Rapidez: Buena.
- Compatibilidad: Compatible.
- Mantenimiento y comunidad: Comunidad activa.
- Yarn preinstalado: No.

### Rocky Linux
- Ligereza: Moderada.
- Rapidez: Buena.
- Compatibilidad: Compatible.
- Mantenimiento y comunidad: Respaldada por Rocky Enterprise Software
Foundation.
- Yarn preinstalado: No.

### Node
- Ligereza: Ligera.
- Rapidez: Rápida.
- Compatibilidad: Compatible.
- Mantenimiento y comunidad: Comunidad activa y mantenida.
- Yarn preinstalado: Sí.


## Decisión final
La opción que satisface todos nuestros criterios es Node. En particular,
vamos a utilizar node:20-buster-slim.