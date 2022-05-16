import { IProduct } from './product';
import { IType } from './type';

export interface ICategory {
  id: number;
  slug: string;
  type: IType;
  product: IProduct[];
}
