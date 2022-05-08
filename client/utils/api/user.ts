import { ResponseUser, RegisterDto, LoginDto } from './../../types/user';
import { AxiosInstance } from 'axios';

export const UserApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<ResponseUser[]>('/user');
    return data;
  },
  async register(dto: RegisterDto) {
    const { data } = await instance.post<RegisterDto, { data: ResponseUser }>(
      '/auth/register',
      dto,
    );
    return data;
  },
  async login(dto: LoginDto) {
    const { data } = await instance.post<LoginDto, { data: ResponseUser }>('/auth/login', dto);
    return data;
  },
  async getMe() {
    const { data } = await instance.get<ResponseUser>('/user/profile');
    return data;
  },
});
