import { type UnionTypeError } from 'src/modules/shared/domain/errors/enums/ErrorCode';
import {
  type IMardukError,
  type MardukResult,
} from 'src/modules/shared/domain/models/MardukResult';

export interface IAppErrorHandler {
  returnOkOrThrowException<T>(payload: MardukResult<T, UnionTypeError>): T;
  throwException(payload: IMardukError<UnionTypeError>): never;
}
