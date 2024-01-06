import { Controller, Get, Post, Put, Param, Body, HttpStatus, HttpException, UseFilters } from '@nestjs/common';
import { LoggerConfig } from './logger';
import { Actividad } from './actividad';
import { OptimizadorSemanal } from './optimizador_semanal';
import { ActividadVariable } from './actividad_variable';

/**
 * Filtro para manejar errores.
 * @see https://docs.nestjs.com/exception-filters
 */
export class ErrorFilter {
  catch(error: any, host: any): void {
    const response = host.switchToHttp().getResponse();
    const status = error.getStatus ? error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    response.status(status).json({
      statusCode: status,
      message: error.message,
    });
  }
}

@Controller('tareas')
export class Controlador {
  private readonly logger = LoggerConfig.logger;

  constructor(private readonly optimizador: OptimizadorSemanal) {}

  @Get()
  obtenerTodasLasTareas(): Actividad[] | undefined {
    try {
      const tareas: Actividad[] = this.optimizador.Actividades;
      this.logger.debug('Obteniendo todas las tareas programadas');
      return tareas;
    } catch (error) {
      this.handleException(error);
      return undefined;
    }
  }

  @Post()
  @UseFilters(new ErrorFilter())
  crearTarea(@Body() body: any): Actividad | undefined {
    try {
      const { descripcion, duracion } = body;

      if (descripcion == null || duracion == null) {
        throw new HttpException('La descripción y la duración son obligatorias para crear una tarea', HttpStatus.BAD_REQUEST);
      }

      const actividadVariable = new ActividadVariable(descripcion, this.logger, duracion);
      this.logger.info('Tarea creada');
      return actividadVariable;
    } catch (error) {
      this.handleException(error);
      return undefined;
    }
  }

  @Get(':id')
  obtenerTareaPorId(@Param('id') id: number): Actividad | undefined {
    try {
      const actividad = this.optimizador.Actividades.find((act) => act.Id === id);

      if (!actividad) {
        throw new HttpException(`No se encontró la tarea con id: ${id}`, HttpStatus.NOT_FOUND);
      }

      this.logger.info(`Tarea con id ${id} encontrada`);
      return actividad;
    } catch (error) {
      this.handleException(error);
      return undefined;
    }
  }

  @Put(':id')
  @UseFilters(new ErrorFilter())
  actualizarTarea(@Param('id') id: string): string | undefined {
    try {
      // Lógica para actualizar una tarea por su ID
      this.logger.info(`Tarea con ID ${id} actualizada`);
      return `Tarea con ID ${id} actualizada`;
    } catch (error) {
      this.handleException(error);
      return undefined;
    }
  }

  private handleException(error: any): void {
    this.logger.error(error.message);
    throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}