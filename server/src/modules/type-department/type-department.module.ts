import { Module } from '@nestjs/common';
import { TypeDepartmentService } from './type-department.service';
import { TypeDepartmentController } from './type-department.controller';
import { typeDepartmentProvider } from './type-department.provider';

@Module({
  providers: [TypeDepartmentService, ...typeDepartmentProvider],
  controllers: [TypeDepartmentController],
})
export class TypeDepartmentModule {}
