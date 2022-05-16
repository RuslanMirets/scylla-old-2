import { IImage } from './image';
import { IProduct } from './product';
import { IType } from './type';

export interface ICategory {
  id: number;
  slug: string;
  image: IImage;
  type: IType;
  product: IProduct[];
}
