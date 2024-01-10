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
import { ApiKeyGuard } from '../auth/guards/apikey.guard';
import { WeatherResponseType } from 'types/API';

@Controller('weathers')
@UseInterceptors(CacheInterceptor)
export class WeathersController {
  constructor(private readonly weathersService: WeathersService) {}

  @Get('')
  @UseGuards(ApiKeyGuard)
  async findOne(
    @Body() FilterWeather: FilterWeatherDto,
  ): Promise<WeatherResponseType> {
    return await this.weathersService.find(FilterWeather);
  }
}
