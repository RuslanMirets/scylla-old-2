import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Category' })
export class Category extends Model<Category> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  image: string;
}
