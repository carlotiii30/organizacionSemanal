import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LoggerConfig } from './logger';
import { Actividad } from './actividad';
import { OptimizadorSemanal } from './optimizador_semanal';
import { ActividadVariable } from './actividad_variable';

@Controller('tareas')
export class Controlador {
  private readonly logger = LoggerConfig.logger;

  constructor(private readonly optimizador: OptimizadorSemanal) {}

  @Get()
  obtenerTodasLasTareas(): Actividad[] {
    const tareas: Actividad[] = this.optimizador.Actividades;

    this.logger.debug('Obteniendo todas las tareas programadas');
    return tareas;
  }

  @Post()
  crearTarea(@Body() body: any): Actividad {
    try {
      const { descripcion, duracion } = body;

      if (descripcion == null || duracion == null) {
        throw new Error('La descripción y la duración son obligatorias para crear una tarea');
      }

      const actividadVariable = new ActividadVariable(descripcion, this.logger, duracion);

      this.logger.info('Tarea creada');
      return actividadVariable;

    } catch (error: any) {
      this.logger.error(`Error al crear la tarea: ${error.message}`);
      throw new Error(error.message);
    }
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
