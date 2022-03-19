import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'admin', description: 'Administrator' })
  @IsString({ message: 'Name must be a string' })
  readonly value: string;

  @ApiProperty({ example: 1, description: 'User ID' })
  @IsNumber({}, { message: 'User ID must be a number' })
  readonly userId: number;
}
