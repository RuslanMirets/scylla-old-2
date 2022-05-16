import { Color } from './color.model';
import { Product } from 'src/modules/product/models/product.model';
import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'ProductColor', createdAt: false, updatedAt: false })
export class ProductColor extends Model<ProductColor> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  productId: number;

  @ForeignKey(() => Color)
  @Column({ type: DataType.INTEGER })
  colorId: number;
}
