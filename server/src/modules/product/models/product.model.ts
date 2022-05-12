import { Department } from './../../department/models/department.model';
import { Color } from './../../color/models/color.model';
import { Brand } from './../../brand/models/brand.model';
import { Category } from './../../category/models/category.model';
import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'Product' })
export class Product extends Model<Product> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  price: number;

  @Column({ type: DataType.STRING(1234), allowNull: true })
  description: string;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  inStock: number;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  sold: number;

  @Column({ type: DataType.JSONB, allowNull: false })
  images: string[];

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  categoryId: number;

  @BelongsTo(() => Category, { onDelete: 'CASCADE' })
  category: Category;

  @ForeignKey(() => Brand)
  @Column({ type: DataType.INTEGER, allowNull: false })
  brandId: number;

  @BelongsTo(() => Brand, { onDelete: 'CASCADE' })
  brand: Brand;

  @ForeignKey(() => Color)
  @Column({ type: DataType.INTEGER, allowNull: false })
  colorId: number;

  @BelongsTo(() => Color, { onDelete: 'CASCADE' })
  color: Color;

  @ForeignKey(() => Department)
  @Column({ type: DataType.INTEGER, allowNull: false })
  departmentId: number;

  @BelongsTo(() => Department, { onDelete: 'CASCADE' })
  department: Department;
}
