import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Product } from 'src/modules/product/models/product.model';

@Table({ tableName: 'Color' })
export class Color extends Model<Color> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => Product)
  product: Product;
}
