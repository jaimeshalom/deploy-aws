import { type Result } from 'ts-results';

import { type TError, type UnionTypeError } from '../errors/enums/ErrorCode';

/**
 * Interface for a MardukError
 */
export interface IMardukError<TError extends UnionTypeError> {
  /**
   * Semantic error associated with the error status code
   * in ErrorCode constants
   */
  error: TError;
  /**
   * Optional message to be displayed next to the error
   */
  message?: string | undefined;
}

/**
 * Type alias for a Result that returns a MardukError
 */
export type MardukResult<T, TError extends UnionTypeError> = Result<
  T,
  IMardukError<TError>
>;

/**
 * Type alias for a Promise that returns a MardukResult
 */
export type PromiseMarduk<T, TError extends UnionTypeError> = Promise<
  MardukResult<T, TError>
>;

/**
 *
 */
export type ErrBasicCommon = TError<
  | 'INTERNAL_SERVER_ERROR'
  | 'CONFLICT'
  | 'BAD_REQUEST'
  | 'UNPROCESSABLE_ENTITY'
  | 'NOT_FOUND'
  | 'FORBIDDEN'
>;
export type ErrBasicFindOne = TError<
  'INTERNAL_SERVER_ERROR' | 'NOT_FOUND' | 'BAD_REQUEST' | 'FORBIDDEN'
>;
export type ErrBasicFindAll = TError<
  'INTERNAL_SERVER_ERROR' | 'FORBIDDEN' | 'NOT_FOUND'
>;
export type ErrBasicFindAllPaginated = TError<
  'INTERNAL_SERVER_ERROR' | 'FORBIDDEN' | 'NOT_FOUND'
>;
export type ErrBasicCreate = TError<
  | 'INTERNAL_SERVER_ERROR'
  | 'CONFLICT'
  | 'BAD_REQUEST'
  | 'UNPROCESSABLE_ENTITY'
  | 'FORBIDDEN'
>;
export type ErrBasicUpdate = TError<
  | 'INTERNAL_SERVER_ERROR'
  | 'CONFLICT'
  | 'BAD_REQUEST'
  | 'UNPROCESSABLE_ENTITY'
  | 'NOT_FOUND'
  | 'FORBIDDEN'
>;
export type ErrBasicDelete = TError<
  'INTERNAL_SERVER_ERROR' | 'NOT_FOUND' | 'BAD_REQUEST' | 'FORBIDDEN'
>;
export type ErrBasicExists = TError<'INTERNAL_SERVER_ERROR' | 'FORBIDDEN'>;
