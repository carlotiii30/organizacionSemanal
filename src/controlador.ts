import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { LoggerConfig } from './logger';

@Controller('organizador')
export class Controlador {
  @Get()
  obtenerRecursos(): string {
    // Lógica para obtener todos los recursos

    LoggerConfig.logger.info('Recursos obtenidos');
    return 'Recursos obtenidos';
  }

  @Get(':id')
  obtenerRecurso(@Param('id') id: string): string {
    // Lógica para obtener un recurso por su ID

    LoggerConfig.logger.info(`Recurso con ID ${id} obtenido`);
    return `Recurso con ID ${id} obtenido`;
  }

  @Post()
  crearRecurso(): string {
    // Lógica para crear un nuevo recurso

    LoggerConfig.logger.info('Recurso creado');
    return 'Recurso creado';
  }

  @Put(':id')
  actualizarRecurso(@Param('id') id: string): string {
    // Lógica para actualizar un recurso por su ID

    LoggerConfig.logger.info(`Recurso con ID ${id} actualizado`);
    return `Recurso con ID ${id} actualizado`;
  }

  @Delete(':id')
  eliminarRecurso(@Param('id') id: string): string {
    // Lógica para eliminar un recurso por su ID

    LoggerConfig.logger.info(`Recurso con ID ${id} eliminado`);
    return `Recurso con ID ${id} eliminado`;
  }
}
