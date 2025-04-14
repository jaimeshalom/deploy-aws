import { HttpException } from '@nestjs/common';

import {
  type UnionTypeError,
  ErrorCode,
} from '../../domain/errors/enums/ErrorCode';
import {
  type IMardukError,
  type MardukResult,
} from '../../domain/models/MardukResult';

import { type IAppErrorHandler } from './interfaces/IAppErrorHandler';

/**
 * App Nest Error Handler
 */
export class AppNestErrorHandler implements IAppErrorHandler {
  returnOkOrThrowException<T>(payload: MardukResult<T, UnionTypeError>): T {
    return payload.mapErr((err) => this.throwException(err)).val;
  }

  public throwException({
    error,
    message,
  }: IMardukError<UnionTypeError>): never {
    const httpException = this.getError({ error, message });

    throw httpException;
  }

  private getError({
    message,
    error,
  }: IMardukError<UnionTypeError>): HttpException {
    const statusCode = ErrorCode[error];

    const response = { message, error, statusCode };

    return new HttpException(response, statusCode);
  }
}
