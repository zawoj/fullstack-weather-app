import { Module } from '@nestjs/common';
import { WeathersService } from './weathers.service';
import { WeathersController } from './weathers.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    CacheModule.register({
      ttl: 90,
    }),
    HttpModule,
  ],
  controllers: [WeathersController],
  providers: [WeathersService],
})
export class WeathersModule {}
