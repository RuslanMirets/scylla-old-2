import { TypeDepartment } from './models/type-department.model';
import { TYPE_DEPARTMENT_REPOSITORY } from 'src/core/constants';

export const typeDepartmentProvider = [
  { provide: TYPE_DEPARTMENT_REPOSITORY, useValue: TypeDepartment },
];
