import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, this is my Recruitment Task for Full Stack Developer Position';
  }
}
