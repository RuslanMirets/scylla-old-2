import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { TypeDepartment } from 'src/modules/type-department/models/type-department.model';

@Table({ tableName: 'Type' })
export class Type extends Model<Type> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;

  @HasMany(() => TypeDepartment)
  typeDepartment: TypeDepartment;
}
