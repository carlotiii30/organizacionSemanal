import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LoggerConfig } from './logger';
import { Actividad } from './actividad';
import { OptimizadorSemanal } from './optimizador_semanal';
import { ActividadVariable } from './actividad_variable';
import { ActividadFija } from './actividad_fija';

@Controller('tareas')
export class Controlador {
  private readonly logger = LoggerConfig.logger;

  constructor(private readonly optimizador: OptimizadorSemanal) { }

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
        this.logger.error('Descripción o duración no proporcionadas');
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
  obtenerTareaPorId(@Param('id') id: number): Actividad {
    try {
      const actividad = this.optimizador.Actividades.find((actividad) => actividad.Id === id);

      if (actividad == null) {
        this.logger.error('No se encontró la tarea');
        throw new Error(`No se encontró la tarea con id: ${id}`);
      }

      this.logger.info(`Tarea con id ${id} encontrada`);
      return actividad;

    } catch (error: any) {
      this.logger.error(error.message);
      throw new Error(error.message);
    }
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
