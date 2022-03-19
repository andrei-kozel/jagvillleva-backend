import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'User ID' })
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    unique: true,
  })
  id: number;

  @ApiProperty({ example: 'John Doe', description: 'User name' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: 'email@example.com', description: 'User email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: 'password12345', description: 'User password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
