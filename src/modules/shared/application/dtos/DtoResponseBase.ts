// {
//   "status": "success|error",
//   "message": "Successfully retrieved the leads service status",
//   "requestId": "763a7505-0048-4371-a3d0-b4d64f68dcec",
//   "requestTime": "2025-04-08T14:51:27Z",
//   "apiVersion": "1.0",
//   "response": T
// }

import { ApiProperty } from '@nestjs/swagger';

import { DtoStatusEnum } from '../../domain/enums/DtoStatusEnum';

export abstract class DtoResponseBase<T> {
  @ApiProperty({ enum: DtoStatusEnum })
  status: DtoStatusEnum;

  /**
   * Message about the action performed and its result
   */
  @ApiProperty()
  message: string;

  /**
   * Request identifier
   */
  @ApiProperty()
  requestId: string;

  /**
   * Time of the request
   */
  @ApiProperty({ type: Date })
  requestTime: Date | string;

  /**
   * Current api version
   */
  @ApiProperty({ type: String })
  apiVersion = '1.0';

  abstract response: T;
}
