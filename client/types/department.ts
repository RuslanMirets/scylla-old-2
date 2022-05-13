import { IProduct } from './product';

export interface IDepartment {
  id: number;
  name: string;
  slug: string;
  product: IProduct[];
}
