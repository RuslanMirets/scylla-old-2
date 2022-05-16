import { IImage } from './image';
import { ICategory } from './category';
export interface IType {
  id: number;
  name: string;
  slug: string;
  image: IImage;
  category: ICategory[];
}
