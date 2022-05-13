import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { Department } from 'src/modules/department/models/department.model';
import { Type } from 'src/modules/type/models/type.model';

@Table({ tableName: 'TypeDepartment', createdAt: false, updatedAt: false })
export class TypeDepartment extends Model<TypeDepartment> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  image: string;

  @ForeignKey(() => Type)
  @Column({ type: DataType.INTEGER })
  typeId: number;

  @ForeignKey(() => Department)
  @Column({ type: DataType.INTEGER })
  departmentId: number;
}
