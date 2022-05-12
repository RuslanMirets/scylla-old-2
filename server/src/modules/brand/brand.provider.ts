import { Brand } from './models/brand.model';
import { BRAND_REPOSITORY } from './../../core/constants/index';

export const brandProvider = [{ provide: BRAND_REPOSITORY, useValue: Brand }];
