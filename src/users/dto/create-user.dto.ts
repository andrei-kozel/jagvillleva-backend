import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'User name' })
  @IsString({ message: 'Name must be a string' })
  readonly name: string;

  @ApiProperty({ example: 'email@example.com', description: 'User email' })
  @IsEmail({}, { message: 'Email is not valid' })
  readonly email: string;

  @ApiProperty({ example: 'password12345', description: 'User password' })
  @IsString({ message: 'Name must be a string' })
  @Length(6, 16, { message: 'Password must be at least 6 characters long' })
  readonly password: string;
}
