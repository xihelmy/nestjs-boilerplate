import { BasePaginationResponse } from '@app/dtos/base/base-pagination-response.dto';
import {
  CompanyPaginationFilterDto,
  CreateCompanyDto,
  UpdateCompanyDto,
} from '@app/dtos/company/company-request.dto';
import { CompanyResponseDto } from '@app/dtos/company/company-response.dto';
import { validateInput } from '@app/utils/validation.util';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';

@ApiTags('Admin - Companies')
@Controller('admin/companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new company' })
  @ApiResponse({
    status: 201,
    description: 'The company has been successfully created.',
    type: CompanyResponseDto,
  })
  create(@Body() createCompanyDto: CreateCompanyDto) {
    validateInput(createCompanyDto);
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve a list of companies' })
  @ApiResponse({
    status: 200,
    description: 'List of companies.',
    type: () => new BasePaginationResponse(CompanyResponseDto),
  })
  findAll(@Query() filter: CompanyPaginationFilterDto) {
    return this.companyService.findAll(filter);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a company by its ID' })
  @ApiResponse({
    status: 200,
    description: 'The company details.',
    type: CompanyResponseDto,
  })
  findOne(@Param('id') id: number) {
    if (!id) throw new BadRequestException('id is required');
    return this.companyService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a company by its ID' })
  @ApiResponse({
    status: 200,
    description: 'The company has been successfully updated.',
    type: CompanyResponseDto,
  })
  update(@Param('id') id: number, @Body() updateCompanyDto: UpdateCompanyDto) {
    if (!id) throw new BadRequestException('id is required');
    return this.companyService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a company by its ID' })
  @ApiResponse({
    status: 200,
    description: 'The company has been successfully deleted.',
  })
  remove(@Param('id') id: number) {
    if (!id) throw new BadRequestException('id is required');
    return this.companyService.remove(id);
  }
}
