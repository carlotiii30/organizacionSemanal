import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { LoggerConfig } from './logger';

@Controller('organizador')
export class Controlador {
  @Get()
  comprobarEstado(): string {
    LoggerConfig.logger.debug('Comprobando estado del servidor');
    return 'El servidor está funcionando correctamente';
  }
}
