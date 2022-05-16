import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Category } from 'src/modules/category/models/category.model';
import { Department } from 'src/modules/department/models/department.model';

@Table({ tableName: 'Type' })
export class Type extends Model<Type> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  description: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  image: string;

  @ForeignKey(() => Department)
  @Column({ type: DataType.INTEGER, allowNull: false })
  departmentId: number;

  @BelongsTo(() => Department, { onDelete: 'CASCADE' })
  department: Department;

  @HasMany(() => Category, { onDelete: 'CASCADE' })
  category: Category;
}
