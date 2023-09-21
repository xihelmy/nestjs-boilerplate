import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';

export class BasePaginationResponse<T> {
  @Exclude()
  private type: new () => T;

  @ApiProperty({
    description: 'The data records for the current page.',
    type: () =>
      Type((opt) => (opt.newObject as BasePaginationResponse<T>).type),
  })
  data: T[];

  @ApiProperty({
    description: 'Number of records skipped.',
  })
  skip: number;

  @ApiProperty({
    description: 'Limit for the number of records returned.',
  })
  take: number;

  @ApiProperty({
    description: 'Total number of records.',
  })
  total: number;

  constructor(type: new () => T) {
    this.type = type;
  }
}
