import { Color } from './models/color.model';
import { COLOR_REPOSITORY } from './../../core/constants/index';

export const colorProvider = [{ provide: COLOR_REPOSITORY, useValue: Color }];
