import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    BadRequestException,
    Logger,
  } from '@nestjs/common';
  import { Response } from 'express';
  @Catch()
  export class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(HttpExceptionFilter.name);
  
    catch(exception: Error, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
  
      if (exception instanceof BadRequestException) {
        this.logger.error(`400 - ${(exception as any).response.message}`);
        return response.status(400).json({
          title: 'Your request parameters did not validate',
          message: (exception as any).response.message,
          status: 400,
        });
      }
  
      if (exception instanceof HttpException) {
        const status = exception.getStatus();
        const exceptionResponse = exception.getResponse();
        this.logger.error(`${exceptionResponse['description']}`);
        return response.status(status).json(exceptionResponse);
      }
  
      this.logger.error(`500 - ${exception.message}`);
      return response.status(500).json({
        title: exception.name,
        description: exception.message,
        status: 500,
      });
    }
  }