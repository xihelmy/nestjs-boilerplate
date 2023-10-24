import { PrismaService } from '@app/database/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from './company.service';

const mockPrismaService = {
  company: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('CompanyService', () => {
  let service: CompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompanyService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a company', async () => {
      const dto = { name: 'Test Co.' };
      mockPrismaService.company.create.mockResolvedValue(dto);

      const result = await service.create(dto);
      expect(result).toEqual(dto);
      expect(mockPrismaService.company.create).toHaveBeenCalledWith({
        data: dto,
      });
    });
  });

  describe('findAll', () => {
    it('should return a list of companies', async () => {
      const companyList = [{ id: 1, name: 'Test Co.' }];
      mockPrismaService.company.findMany.mockResolvedValue(companyList);

      const filter = { skip: 0, take: 10, search: 'Test' };
      const result = await service.findAll(filter);
      expect(result).toEqual(companyList);
      expect(mockPrismaService.company.findMany).toHaveBeenCalledWith({
        skip: filter.skip,
        take: filter.take,
        where: { name: { contains: filter.search } },
      });
    });
  });

  describe('findOne', () => {
    it('should return a company if found', async () => {
      const company = { id: 1, name: 'Test Co.' };
      mockPrismaService.company.findUnique.mockResolvedValue(company);

      const result = await service.findOne(1);
      expect(result).toEqual(company);
    });

    it('should throw an error if company not found', async () => {
      mockPrismaService.company.findUnique.mockResolvedValue(null);
      await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
    });
  });
});
