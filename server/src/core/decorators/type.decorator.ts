import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Type as TypeModel } from 'src/modules/type/models/type.model';

export const Type = createParamDecorator((_: unknown, ctx: ExecutionContext): TypeModel => {
  const request = ctx.switchToHttp().getRequest();
  return request.body.typeId;
});
