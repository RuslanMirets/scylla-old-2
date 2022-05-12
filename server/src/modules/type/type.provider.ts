import { TYPE_REPOSITORY } from './../../core/constants/index';
import { Type } from './models/type.model';

export const typeProvider = [{ provide: TYPE_REPOSITORY, useValue: Type }];
