import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { LoggerConfig } from './logger';

@Controller('organizador')
export class Controlador {
  @Get()
  comprobarEstado(): string {
    LoggerConfig.logger.debug('Comprobando estado del servidor');
    return 'El servidor está funcionando correctamente';
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
