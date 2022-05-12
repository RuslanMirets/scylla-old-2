import { Size } from './size.model';
import { Product } from 'src/modules/product/models/product.model';
import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'ProductSize', createdAt: false, updatedAt: false })
export class ProductSize extends Model<ProductSize> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  productId: number;

  @ForeignKey(() => Size)
  @Column({ type: DataType.INTEGER })
  sizeId: number;
}
