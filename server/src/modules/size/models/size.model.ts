import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Size' })
export class Size extends Model<Size> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;
}
