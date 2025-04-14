import { type NestMiddleware, Injectable } from '@nestjs/common';
import { type NextFunction, type Request, type Response } from 'express';
import { randomUUID } from 'node:crypto';

export const REQUEST_ID_HEADER = 'X-Request-Id';
export const REQUEST_TIME_HEADER = 'X-Request-Time';

export interface ICustomRequestProps {
  [REQUEST_ID_HEADER]: string;
  [REQUEST_TIME_HEADER]: string;
}

declare module 'express' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Request extends ICustomRequestProps {}
}

declare module 'http' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface IncomingMessage extends ICustomRequestProps {}
}

@Injectable()
export class RequestMetaMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const id = randomUUID();
    req[REQUEST_ID_HEADER] = id;
    res.set(REQUEST_ID_HEADER, id);

    const requestTime = new Date().toISOString();
    req[REQUEST_TIME_HEADER] = requestTime;
    res.set(REQUEST_TIME_HEADER, requestTime);

    next();
  }
}
