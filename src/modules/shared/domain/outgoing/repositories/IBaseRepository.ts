import { type PromiseMarduk } from 'src/modules/shared/domain/models/MardukResult';

import { type IBaseEntityModel } from '../../models/interfaces/IBaseEntityModel';

export interface IBaseRepository<T extends IBaseEntityModel> {
  findOne(id: T['id']): PromiseMarduk<T, 'NOT_FOUND' | 'INTERNAL_SERVER_ERROR'>;
  save(items: T | T[]): PromiseMarduk<'SUCCESS', 'INTERNAL_SERVER_ERROR'>;
}
