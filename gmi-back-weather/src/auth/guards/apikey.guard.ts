import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const apiKey = this.getApiKey(context);
    if (!apiKey) {
      return false;
    }

    if (apiKey !== process.env.API_SECRET) return false;

    return true;
  }

  private getApiKey(context: ExecutionContext): string {
    const request = context.switchToHttp().getRequest();
    const apiKeyFromHeader = request.headers['x-api-key'];
    const apiKeyFromQuery = request.query.api_key;
    return apiKeyFromHeader || apiKeyFromQuery;
  }
}
