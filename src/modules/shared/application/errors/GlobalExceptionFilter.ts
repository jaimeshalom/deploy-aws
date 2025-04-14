// src/modules/shared/infrastructure/filters/global-exception.filter.ts
import {
  type ArgumentsHost,
  type ExceptionFilter,
  Catch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { type Request, type Response } from 'express';

import { type DtoResponseBase } from 'src/modules/shared/application/dtos/DtoResponseBase';

import { DtoStatusEnum } from '../../domain/enums/DtoStatusEnum';
import {
  REQUEST_ID_HEADER,
  REQUEST_TIME_HEADER,
} from '../../domain/middlewares/RequestMetaMiddleware';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();

    const requestId =
      (req[REQUEST_ID_HEADER] as string | undefined) ?? 'Unknown';
    const requestTime =
      (req[REQUEST_TIME_HEADER] as string | undefined) ??
      new Date().toISOString();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      message =
        typeof res === 'string'
          ? res
          : ((res as any)?.message ?? 'Unexpected error');
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    const errorResponse: DtoResponseBase<undefined> = {
      apiVersion: '1.0',
      status: DtoStatusEnum.error,
      message,
      requestId,
      requestTime,
      response: undefined,
    };

    res.status(status).json(errorResponse);
  }
}
