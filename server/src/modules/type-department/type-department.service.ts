import { TypeDepartment } from './models/type-department.model';
import { TYPE_DEPARTMENT_REPOSITORY } from 'src/core/constants';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TypeDepartmentService {
  constructor(
    @Inject(TYPE_DEPARTMENT_REPOSITORY) private readonly tdRepository: typeof TypeDepartment,
  ) {}

  async create(typeId: number, departmentId: number, image: string): Promise<TypeDepartment> {
    return await this.tdRepository.create<TypeDepartment>({
      typeId,
      departmentId,
      image,
    });
  }

  async findAll(): Promise<TypeDepartment[]> {
    return await this.tdRepository.findAll<TypeDepartment>({ include: { all: true } });
  }
}
