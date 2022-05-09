import { IRole } from './role';

export interface IUser {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  role: IRole[];
  token: string;
  avatar: string;
}
