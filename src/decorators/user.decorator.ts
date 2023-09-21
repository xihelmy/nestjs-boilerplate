import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Extracts the user object from the request.
 */
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user; // Assumes the user is stored in req.user
  },
);
