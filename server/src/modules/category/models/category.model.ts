import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Department } from 'src/modules/department/models/department.model';
import { Product } from 'src/modules/product/models/product.model';
import { Type } from 'src/modules/type/models/type.model';

@Table({ tableName: 'Category' })
export class Category extends Model<Category> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;

  @ForeignKey(() => Type)
  @Column({ type: DataType.INTEGER, allowNull: false })
  typeId: number;

  @BelongsTo(() => Type, { onDelete: 'CASCADE' })
  type: Type;

  @HasMany(() => Product, { onDelete: 'CASCADE' })
  product: Product;
}
