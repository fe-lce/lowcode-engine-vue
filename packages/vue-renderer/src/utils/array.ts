import { isArray } from '@felce/lowcode-vue-renderer-core';

export function ensureArray<T>(val: T | T[] | undefined | null): T[] {
  return val ? (isArray(val) ? val : [val]) : [];
}

export type MaybeArray<T> = T | T[];
