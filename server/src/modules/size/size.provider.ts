import { Size } from './models/size.model';
import { SIZE_REPOSITORY } from './../../core/constants/index';

export const sizeProvider = [{ provide: SIZE_REPOSITORY, useValue: Size }];
