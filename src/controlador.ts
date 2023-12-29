import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { LoggerConfig } from './logger';
import { Actividad } from './actividad';

@Controller('tareas')
export class Controlador {
  private readonly logger = LoggerConfig.logger;

  @Get()
  obtenerTodasLasTareas(): Actividad[] {
    const tareas: Actividad[] = [];
    // Lógica para obtener todas las tareas

    this.logger.debug('Obteniendo todas las tareas programadas');
    return tareas;
  }

  @Post()
  crearTarea(): string {
    // Lógica para crear una nueva tarea

    this.logger.info('Tarea creada');
    return 'Tarea creada';
  }

  @Get(':id')
  obtenerTareaPorId(@Param('id') id: string): string {
    // Lógica para obtener una tarea por su ID

    this.logger.debug(`Obteniendo tarea con ID ${id}`);
    return `Tarea con ID ${id}`;
  }

  @Put(':id')
  actualizarTarea(@Param('id') id: string): string {
    // Lógica para actualizar una tarea por su ID

    this.logger.info(`Tarea con ID ${id} actualizada`);
    return `Tarea con ID ${id} actualizada`;
  }

  @Delete(':id')
  eliminarTarea(@Param('id') id: string): string {
    // Lógica para eliminar una tarea por su ID

    this.logger.info(`Tarea con ID ${id} eliminada`);
    return `Tarea con ID ${id} eliminada`;
  }
}
