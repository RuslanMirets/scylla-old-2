import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Department } from 'src/modules/department/models/department.model';

@Table({ tableName: 'Type' })
export class Type extends Model<Type> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;

  @ForeignKey(() => Department)
  @Column({ type: DataType.INTEGER, allowNull: false })
  departmentId: number;

  @BelongsTo(() => Department, { onDelete: 'CASCADE' })
  department: Department;
}
