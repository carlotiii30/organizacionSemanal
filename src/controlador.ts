import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { LoggerConfig } from './logger';

@Controller('tareas')
export class Controlador {
  @Get()
  obtenerTodasLasTareas(): string {
    // Lógica para obtener todas las tareas

    LoggerConfig.logger.debug('Obteniendo todas las tareas programadas');
    return 'Lista de todas las tareas programadas';
  }

  @Post()
  crearTarea(): string {
    // Lógica para crear una nueva tarea

    LoggerConfig.logger.info('Tarea creada');
    return 'Tarea creada';
  }

  @Get(':id')
  obtenerTareaPorId(@Param('id') id: string): string {
    // Lógica para obtener una tarea por su ID

    LoggerConfig.logger.debug(`Obteniendo tarea con ID ${id}`);
    return `Tarea con ID ${id}`;
  }

  @Put(':id')
  actualizarTarea(@Param('id') id: string): string {
    // Lógica para actualizar una tarea por su ID

    LoggerConfig.logger.info(`Tarea con ID ${id} actualizada`);
    return `Tarea con ID ${id} actualizada`;
  }

  @Delete(':id')
  eliminarTarea(@Param('id') id: string): string {
    // Lógica para eliminar una tarea por su ID

    LoggerConfig.logger.info(`Tarea con ID ${id} eliminada`);
    return `Tarea con ID ${id} eliminada`;
  }
}
