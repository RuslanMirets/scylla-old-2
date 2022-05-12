import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Color' })
export class Color extends Model<Color> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}
