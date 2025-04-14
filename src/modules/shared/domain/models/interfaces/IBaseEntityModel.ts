export type TypeOfId = string | number | bigint;

export interface IBaseEntityModel<T extends TypeOfId = TypeOfId> {
  readonly id: T;
}
