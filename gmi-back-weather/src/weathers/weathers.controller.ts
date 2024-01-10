import {
  Body,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { WeathersService } from './weathers.service';
import { FilterWeatherDto } from './dto/filter-weather.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiKeyGuard } from 'src/auth/guards/apikey.guard';

@Controller('weathers')
@UseInterceptors(CacheInterceptor)
export class WeathersController {
  constructor(private readonly weathersService: WeathersService) {}

  @Get('')
  @UseGuards(ApiKeyGuard)
  findOne(@Body() FilterWeather: FilterWeatherDto) {
    return this.weathersService.find(FilterWeather);
  }
}
