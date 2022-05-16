import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Product } from 'src/modules/product/models/product.model';

@Table({ tableName: 'Department' })
export class Department extends Model<Department> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;

  @HasMany(() => Product, { onDelete: 'CASCADE' })
  product: Product;
}
