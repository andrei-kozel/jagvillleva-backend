import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model } from 'sequelize-typescript';

interface DogCreationAttrs {
  name: string;
  breed: string;
  birthday: Date;
  age: number;
  images: string[];
  height: number;
  weight: number;
  description: string;
  gender: string;
  neuterated: string;
}

export class Dog extends Model<Dog, DogCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Uniq ID' })
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    unique: true,
  })
  id: number;

  @ApiProperty({ example: 'Сherry', description: 'The name of the dog' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({
    example: 'Cavalier king charles spaniel',
    description: 'The breed of the dog',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  breed: string;

  @ApiProperty({
    example: '2020-01-01',
    description: 'The birthday of the dog',
  })
  @Column({ type: DataType.DATE, allowNull: false })
  birthday: Date;

  @ApiProperty({
    example: '1',
    description: 'The age of the dog',
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  age: number;

  @ApiProperty({
    example: ['http://example.com/image1.jpg', 'http://example.com/image2.jpg'],
    description: 'The images of the dog',
  })
  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: true })
  images: string[];

  @ApiProperty({
    example: '75',
    description: 'The height of the dog in cm',
  })
  @Column({ type: DataType.FLOAT, allowNull: false })
  height: number;

  @ApiProperty({
    example: '25',
    description: 'The weight of the dog in kg',
  })
  @Column({ type: DataType.FLOAT, allowNull: false })
  weight: number;

  @ApiProperty({
    example: 'The description of the dog',
    description: 'The description of the dog',
  })
  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @ApiProperty({
    example: 'Male',
    description: 'Gender of the dog',
  })
  @Column({ type: DataType.TEXT, allowNull: false })
  gender: string;

  @ApiProperty({ example: false, description: 'IS dog neuterated?' })
  @Column({ type: DataType.STRING, allowNull: false })
  neuterated: string;
}
