import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Category } from 'src/modules/category/models/category.model';

@Table({ tableName: 'Type' })
export class Type extends Model<Type> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;

  @HasMany(() => Category, { onDelete: 'CASCADE' })
  category: Category;
}
