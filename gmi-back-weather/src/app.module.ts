import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeathersModule } from './weathers/weathers.module';

@Module({
  imports: [WeathersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
