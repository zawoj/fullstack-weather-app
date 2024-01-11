import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeathersModule } from './weathers/weathers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [WeathersModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
