import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { Role } from 'src/modules/role/models/role.model';
import { UserRole } from 'src/modules/role/models/user-role.model';

@Table({ tableName: 'User' })
export class User extends Model<User> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: '' })
  avatar: string;

  @BelongsToMany(() => Role, () => UserRole)
  role: Role[];
}
