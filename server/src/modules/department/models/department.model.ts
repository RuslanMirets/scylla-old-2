import { Product } from './../../product/models/product.model';
import { Table, Model, Column, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Type } from 'src/modules/type/models/type.model';
import { TypeDepartment } from 'src/modules/type-department/models/type-department.model';

@Table({ tableName: 'Department' })
export class Department extends Model<Department> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;

  @HasMany(() => Product)
  product: Product;

  @BelongsToMany(() => Type, () => TypeDepartment)
  type: Type[];
}
