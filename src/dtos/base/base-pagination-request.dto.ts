import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class BasePaginationQueryDto {
  @ApiProperty({
    description: 'Number of records to skip for pagination.',
    required: false,
    default: 0,
  })
  @IsInt()
  @Min(0)
  @Transform((value) => Number(value))
  skip: number = 0;

  @ApiProperty({
    description: 'Limit number of records to return for pagination.',
    required: false,
    default: 10,
  })
  @IsInt()
  @Min(1)
  @Transform((value) => Number(value))
  take: number = 10;

  @ApiProperty({
    description: 'Keyword for searching companies.',
    required: false,
    default: '',
  })
  @IsString()
  @IsOptional()
  search: string = '';
}
