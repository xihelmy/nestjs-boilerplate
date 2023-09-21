import { Test, TestingModule } from '@nestjs/testing';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

const mockCompanyService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('CompanyController', () => {
  let controller: CompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [
        {
          provide: CompanyService,
          useValue: mockCompanyService,
        },
      ],
    }).compile();

    controller = module.get<CompanyController>(CompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a list of companies', async () => {
      const companyList = [{ id: 1, name: 'Test Co.' }];
      mockCompanyService.findAll.mockResolvedValue(companyList);

      expect(
        await controller.findAll({ skip: 0, take: 10, search: '' }),
      ).toEqual(companyList);
    });
  });

  describe('findOne', () => {
    it('should return a company if found', async () => {
      const company = { id: 1, name: 'Test Co.' };
      mockCompanyService.findOne.mockResolvedValue(company);

      expect(await controller.findOne(1)).toEqual(company);
    });
  });
});
