import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Brand' })
export class Brand extends Model<Brand> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}
