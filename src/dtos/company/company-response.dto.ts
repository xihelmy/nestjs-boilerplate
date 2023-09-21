import { ApiProperty } from '@nestjs/swagger';

export class CompanyResponseDto {
  @ApiProperty({ description: 'ID of the company.' })
  id: number;

  @ApiProperty({ description: 'Name of the company.' })
  name: string;

  @ApiProperty({ description: 'Description of the company.' })
  description: string;

  @ApiProperty({ description: 'Creation date of the company.' })
  createdAt: Date;

  @ApiProperty({ description: 'Update date of the company.' })
  updatedAt: Date;
}
