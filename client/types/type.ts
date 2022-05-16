import { ICategory } from './category';
export interface IType {
  id: number;
  name: string;
  slug: string;
  category: ICategory[];
}
