import { Prop } from '@nestjs/mongoose';

import { type ITimestampedBase } from '../../../domain/models/interfaces/ITimestampedBase';

export class MongooseTimestampedBaseSchema implements ITimestampedBase {
  @Prop({ type: Date, required: false })
  createdAt?: Date | undefined;

  @Prop({ type: Date, required: false })
  updatedAt?: Date | undefined;
}
