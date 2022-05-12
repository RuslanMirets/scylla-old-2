import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Category as CategoryModel } from 'src/modules/category/models/category.model';

export const Category = createParamDecorator((_: unknown, ctx: ExecutionContext): CategoryModel => {
  const request = ctx.switchToHttp().getRequest();
  return request.body.categoryId;
});
