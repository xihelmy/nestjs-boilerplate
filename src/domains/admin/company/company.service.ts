import { PrismaService } from '@app/database/prisma.service';
import {
  CompanyPaginationFilterDto,
  CreateCompanyDto,
  UpdateCompanyDto,
} from '@app/dtos/company/company-request.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {} // Inject Prisma service

  async create(createCompanyDto: CreateCompanyDto) {
    return await this.prisma.company.create({
      data: createCompanyDto,
    });
  }

  async findAll(filter: CompanyPaginationFilterDto) {
    const search = filter.search || '';
    return await this.prisma.company.findMany({
      skip: Number(filter.skip),
      take: Number(filter.take),
      where: {
        name: {
          contains: search,
        },
      },
    });
  }

  async findOne(id: number) {
    const company = await this.prisma.company.findUnique({ where: { id } });
    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return company;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return await this.prisma.company.update({
      where: { id },
      data: updateCompanyDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.company.delete({ where: { id } });
  }
}
