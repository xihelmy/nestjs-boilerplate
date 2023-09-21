import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { BasePaginationQueryDto } from '../base/base-pagination-request.dto';

export class CreateCompanyDto {
  @ApiProperty({ description: 'Name of the company.' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Description of the company.' })
  @IsString()
  description?: string;
}

export class UpdateCompanyDto {
  @ApiProperty({ description: 'Name of the company.', required: false })
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Description of the company.', required: false })
  @IsString()
  description?: string;
}

export class CompanyPaginationFilterDto extends BasePaginationQueryDto {}
