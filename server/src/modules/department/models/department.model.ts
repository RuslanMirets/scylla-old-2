import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Type } from 'src/modules/type/models/type.model';

@Table({ tableName: 'Department' })
export class Department extends Model<Department> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  description: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;

  @HasMany(() => Type, { onDelete: 'CASCADE' })
  type: Type;
}
