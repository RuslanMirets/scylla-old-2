import { IDepartment } from './department';
import { IColor } from './color';
import { IBrand } from './brand';
import { ICategory } from './category';
import { ISize } from './size';

interface IImages {
  filename: string
}
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  inStock: number;
  sold: number;
  category: ICategory;
  brand: IBrand;
  color: IColor[];
  department: IDepartment;
  size: ISize[];
  images: IImages[];
}
