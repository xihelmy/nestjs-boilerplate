import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * JWT-based authentication guard.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const can = super.canActivate(context);
    if (!can) {
      throw new UnauthorizedException('You shall not pass!');
    }
    return true;
  }
}
