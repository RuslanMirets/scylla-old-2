import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Department as DepartmentModel } from 'src/modules/department/models/department.model';

export const Department = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): DepartmentModel => {
    const request = ctx.switchToHttp().getRequest();
    return request.body.departmentId;
  },
);
