import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Brand as BrandModel } from 'src/modules/brand/models/brand.model';

export const Brand = createParamDecorator((_: unknown, ctx: ExecutionContext): BrandModel => {
  const request = ctx.switchToHttp().getRequest();
  return request.body.brandId;
});
