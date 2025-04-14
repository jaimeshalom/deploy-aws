import { Logger } from '@nestjs/common';
import { isMongoId } from 'class-validator';
import { type FilterQuery, type Model, type PopulateOptions } from 'mongoose';
import { Err, Ok } from 'ts-results';
import { type Except } from 'type-fest';

import { type IBaseEntityModel } from 'src/modules/shared/domain/models/interfaces/IBaseEntityModel';
import { type PromiseMarduk } from 'src/modules/shared/domain/models/MardukResult';
import { type IBaseRepository } from 'src/modules/shared/domain/outgoing/repositories/IBaseRepository';

export class MongooseBaseRepository<T extends IBaseEntityModel>
  implements Except<IBaseRepository<T>, 'save'>
{
  protected readonly logger = new Logger(MongooseBaseRepository.name);

  constructor(private readonly mongooseRepo: Model<T>) {}

  async findOne(
    id: string,
    populate?:
      | string
      | string[]
      | PopulateOptions
      | PopulateOptions[]
      | undefined,
  ): PromiseMarduk<T, 'NOT_FOUND' | 'INTERNAL_SERVER_ERROR'> {
    //
    try {
      const entityId = isMongoId(id) ? undefined : id;
      const mongoEntityId = isMongoId(id) ? id : undefined;

      const filter: FilterQuery<T> = entityId ? { id } : { _id: mongoEntityId };

      const entityResult = await this.mongooseRepo.findOne(filter, undefined, {
        populate: populate ?? [],
      });

      if (!entityResult) {
        return Err({
          error: 'NOT_FOUND',
          message: `No hay resultados para el entidad con ID: ${id}`,
        });
      }

      return Ok(entityResult);
    } catch (error) {
      this.logger.error(error);

      return Err({
        error: 'INTERNAL_SERVER_ERROR',
      });
    }
  }
}
