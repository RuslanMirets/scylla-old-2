import { Product } from './../../product/models/product.model';
import { Type } from './../../type/models/type.model';
import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';

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

  @HasMany(() => Product)
  product: Product;
}
