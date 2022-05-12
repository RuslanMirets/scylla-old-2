import { CATEGORY_REPOSITORY } from './../../core/constants/index';
import { Category } from './models/category.model';

export const categoryProvider = [{ provide: CATEGORY_REPOSITORY, useValue: Category }];
