import { PrismaService } from '@app/database/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
      include: {
        role: true,
      },
    });

    if (!user || (user && !bcrypt.compare(password, user.password)))
      throw new UnauthorizedException('Invalid user');

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      roleId: user.roleId,
      roleType: user.role?.type,
    };
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);

    const payload = { ...user, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
