import { USER_REPOSITORY } from 'src/core/constants';
import { User } from './models/user.model';

export const userProvider = [{ provide: USER_REPOSITORY, useValue: User }];
