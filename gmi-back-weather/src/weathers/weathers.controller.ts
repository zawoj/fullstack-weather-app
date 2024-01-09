import { Body, Controller, Get, UseInterceptors } from '@nestjs/common';
import { WeathersService } from './weathers.service';
import { FilterWeatherDto } from './dto/filter-weather.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('weathers')
@UseInterceptors(CacheInterceptor)
export class WeathersController {
  constructor(private readonly weathersService: WeathersService) {}

  @Get('')
  findOne(@Body() FilterWeather: FilterWeatherDto) {
    return this.weathersService.find(FilterWeather);
  }
}
