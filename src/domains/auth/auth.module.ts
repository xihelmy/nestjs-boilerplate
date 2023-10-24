import { PrismaService } from '@app/database/prisma.service';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SeedService } from './seed.service';

@Module({
  providers: [
    AuthService,
    PrismaService,
    SeedService,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
