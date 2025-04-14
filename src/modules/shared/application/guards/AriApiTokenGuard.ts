import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { type Observable } from 'rxjs';

export const ARI_API_TOKEN_KEY_NAME = 'ari-api-token';

@Injectable()
export class AriApiTokenGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly configService: ConfigService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ariApiToken = this.configService.get('ARI_API_TOKEN');

    const request = context.switchToHttp().getRequest();

    const token = request.headers[ARI_API_TOKEN_KEY_NAME];

    if (!token || token !== ariApiToken) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
