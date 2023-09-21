import { Injectable, NestMiddleware } from '@nestjs/common';

/**
 * Middleware to log each incoming request.
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`Incoming Request: ${req.method} ${req.originalUrl}`);
    next();
  }
}
