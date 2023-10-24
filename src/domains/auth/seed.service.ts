import { PrismaService } from '@app/database/prisma.service';
import { UserRoleEnum, UserRoleMapping } from '@app/enums/user-role.enum';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeedService {
  constructor(private readonly prisma: PrismaService) {}

  async seedRoles() {
    // Seed Super Admin role
    await this.prisma.role.upsert({
      where: { type: UserRoleMapping[UserRoleEnum.SUPERADMIN] },
      update: {},
      create: { id: 1, type: UserRoleMapping[UserRoleEnum.SUPERADMIN] },
    });

    await this.prisma.role.upsert({
      where: { type: UserRoleMapping[UserRoleEnum.COMPANY_ADMIN] },
      update: {},
      create: { id: 2, type: UserRoleMapping[UserRoleEnum.COMPANY_ADMIN] },
    });

    await this.prisma.role.upsert({
      where: { type: UserRoleMapping[UserRoleEnum.COMPANY_MEMBER] },
      update: {},
      create: { id: 3, type: UserRoleMapping[UserRoleEnum.COMPANY_MEMBER] },
    });
  }

  async seedSuperAdmin() {
    // Hash the password
    // TODO: make saltRound as config
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash('superSecret', saltRounds);

    // Seed Super Admin user
    await this.prisma.user.upsert({
      where: { email: 'superadmin@example.com' },
      update: {},
      create: {
        name: 'Super Admin',
        email: 'superadmin@example.com',
        password: hashedPassword,
        roleId: UserRoleEnum.SUPERADMIN,
      },
    });
  }

  async seedDatabase() {
    await this.seedRoles();
    await this.seedSuperAdmin();
  }
}
