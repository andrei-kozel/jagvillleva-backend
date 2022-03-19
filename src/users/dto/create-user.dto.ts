import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'User name' })
  readonly name: string;

  @ApiProperty({ example: 'email@example.com', description: 'User email' })
  readonly email: string;

  @ApiProperty({ example: 'password12345', description: 'User password' })
  readonly password: string;
}
