import { validate } from 'class-validator';
import { BadRequestException } from '@nestjs/common';

/**
 * Utility function to validate input data against DTO classes.
 * Throws BadRequestException if data is invalid.
 */
export async function validateInput(dto: any) {
  const errors = await validate(dto);
  if (errors.length > 0) {
    throw new BadRequestException('Invalid input data');
  }
  return true;
}
