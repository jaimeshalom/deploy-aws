import { DtoStatusEnum } from 'src/modules/shared/domain/enums/DtoStatusEnum';

import { type RequestMeta } from '../../domain/decorators/RequestMetaDecorator';
import { type DtoResponseBase } from '../dtos/DtoResponseBase';

export const buildSuccessResponse = <T>(
  response: T,
  message: string,
  requestMeta: RequestMeta,
): DtoResponseBase<T> => ({
  apiVersion: '1.0',
  message,
  requestId: requestMeta.requestId,
  requestTime: new Date(requestMeta.requestTime),
  status: DtoStatusEnum.success,
  response,
});
