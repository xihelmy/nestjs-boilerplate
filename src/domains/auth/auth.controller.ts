import { Public } from '@app/decorators/public.decorator';
import { LoginRequestDto } from '@app/dtos/auth/auth-request.dto';
import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() logInDto: LoginRequestDto) {
    return this.authService.login(logInDto.email, logInDto.password);
  }

  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
