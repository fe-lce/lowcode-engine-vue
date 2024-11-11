import type { IPublicTypeNodeSchema } from '@felce/lowcode-types';
import { IPublicEnumTransformStage } from '@felce/lowcode-types/lib/shell/enum/transform-stage';
import { isFunction, isObject } from './check';

export function exportSchema<T extends IPublicTypeNodeSchema>(node: unknown): T {
  if (isObject(node)) {
    if (isFunction(node.export)) {
      return node.export(IPublicEnumTransformStage.Render);
    } else if (isFunction(node.exportSchema)) {
      return node.exportSchema(IPublicEnumTransformStage.Render);
    }
  }
  return null as unknown as T;
}
