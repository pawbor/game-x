import { assert } from './assert';

export function isNonNullable<T>(v: T): v is NonNullable<T> {
  return v !== null && v !== undefined;
}

export function assertNonNullable<T>(
  v: T,
  message = 'Unexpected nullable value'
): asserts v is NonNullable<T> {
  assert(isNonNullable(v), message);
}

export function forceNonNullable<T>(v: T, message?: string): NonNullable<T> {
  assertNonNullable(v, message);
  return v;
}
