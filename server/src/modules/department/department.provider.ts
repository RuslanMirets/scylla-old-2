import { Department } from './models/department.model';
import { DEPARTMENT_REPOSITORY } from './../../core/constants/index';

export const departmentProvider = [{ provide: DEPARTMENT_REPOSITORY, useValue: Department }];
