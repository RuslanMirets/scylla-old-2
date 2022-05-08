import { ResponseRole } from './role';

export type LoginDto = {
  email: string;
  password: string;
};

export type RegisterDto = {
  name: string;
} & LoginDto;

export type ResponseUser = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  role: ResponseRole[];
  token: string;
  avatar: string;
};
