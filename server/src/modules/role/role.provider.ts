import { ROLE_REPOSITORY } from './../../core/constants/index';
import { Role } from './models/role.model';

export const roleProvider = [{ provide: ROLE_REPOSITORY, useValue: Role }];
