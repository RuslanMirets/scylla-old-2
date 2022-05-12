import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Size as SizeModel } from 'src/modules/size/models/size.model';

export const Size = createParamDecorator((_: unknown, ctx: ExecutionContext): SizeModel => {
  const request = ctx.switchToHttp().getRequest();
  return request.body.sizeId;
});
