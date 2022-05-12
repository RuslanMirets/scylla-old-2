import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Color as ColorModel } from 'src/modules/color/models/color.model';

export const Color = createParamDecorator((_: unknown, ctx: ExecutionContext): ColorModel => {
  const request = ctx.switchToHttp().getRequest();
  return request.body.colorId;
});
