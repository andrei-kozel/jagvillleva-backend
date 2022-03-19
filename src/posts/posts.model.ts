import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  image: string;
  userId: number;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Post ID' })
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    unique: true,
  })
  id: number;

  @ApiProperty({
    example: 'Title example',
    description: 'The name of the post',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({
    example: 'Some text',
    description: 'The content of the post',
  })
  @Column({ type: DataType.TEXT, allowNull: false })
  content: string;

  @ApiProperty({
    example: 'http://example.com/image.png',
    description: 'The image of the post',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
