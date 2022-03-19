import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'User ID' })
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    unique: true,
  })
  id: number;

  @ApiProperty({ example: 'Admin', description: 'User role' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({
    example: 'Administrator',
    description: 'User role description',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
