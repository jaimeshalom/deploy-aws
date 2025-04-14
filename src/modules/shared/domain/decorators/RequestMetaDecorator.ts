import { type ExecutionContext, createParamDecorator } from '@nestjs/common';

import {
  REQUEST_ID_HEADER,
  REQUEST_TIME_HEADER,
} from '../middlewares/RequestMetaMiddleware';

export type RequestMeta = {
  requestId: string;
  requestTime: string;
};

export const RequestMetaDecorator = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): RequestMeta => {
    const req = ctx.switchToHttp().getRequest();

    return {
      requestId: req[REQUEST_ID_HEADER],
      requestTime: req[REQUEST_TIME_HEADER],
    };
  },
);
