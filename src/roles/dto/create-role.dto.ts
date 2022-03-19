import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'Admin', description: 'User role Admin' })
  readonly value: string;

  @ApiProperty({ example: 'Administartor', description: 'Role description' })
  readonly description: string;
}
