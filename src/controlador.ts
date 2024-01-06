import { Controller, Get, Post, Put, Param, Body, HttpStatus, HttpException, UseFilters } from '@nestjs/common';
import { LoggerConfig } from './logger';
import { Actividad, ActividadId } from './actividad';
import { OptimizadorSemanal } from './optimizador_semanal';
import { ActividadVariable } from './actividad_variable';

/**
 * Filtro para manejar errores.
 * @see https://docs.nestjs.com/exception-filters
 */
export class ErrorFilter {
  catch(error: any, host: any): void {
    const response = host.switchToHttp().getResponse();
    const status = error.getStatus ? error.getStatus() : HttpStatus.BAD_REQUEST;
    response.status(status).json({
      statusCode: status,
      message: error.message,
    });
  }
}

@Controller('horario')
export class Controlador {
  private readonly logger = LoggerConfig.logger;

  constructor(private readonly optimizador: OptimizadorSemanal) { }

  // Horario
  @Get()
  obtener(): string[][] | undefined {
    try {
      const horario = this.optimizador.Horario;
      this.logger.debug('Obteniendo horario');
      return horario;
    } catch (error) {
      this.handleException(error);
      return undefined;
    }
  }

  @Post()
  @UseFilters(new ErrorFilter())
  organizar(): string {
    try {
      this.optimizador.organizarHorario();
      return 'Horario organizado con éxito';
    } catch (error) {
      this.handleException(error);
      return 'Error al organizar el horario';
    }
  }

  // Tareas
  @Get('tareas')
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

  @Post('tareas')
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

  @Get('tareas/:id')
  obtenerTareaPorId(@Param('id') id: ActividadId): Actividad | undefined {
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

  private handleException(error: any): void {
    this.logger.error(error.message);
    throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
  }
}