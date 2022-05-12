import { ProductSize } from './product-size.model';
import { Product } from 'src/modules/product/models/product.model';
import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';

@Table({ tableName: 'Size' })
export class Size extends Model<Size> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @BelongsToMany(() => Product, () => ProductSize)
  product: Product[];
}
