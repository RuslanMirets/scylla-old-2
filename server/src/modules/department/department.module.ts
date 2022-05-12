import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { departmentProvider } from './department.provider';

@Module({
  providers: [DepartmentService, ...departmentProvider],
  controllers: [DepartmentController],
  exports: [DepartmentService],
})
export class DepartmentModule {}
