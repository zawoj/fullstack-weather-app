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
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import {
  WeatherBadResponseSchema,
  WeatherResponseSchema,
} from './schema/weathers.schema';
@Controller('weathers')
@UseInterceptors(CacheInterceptor)
export class WeathersController {
  constructor(private readonly weathersService: WeathersService) {}

  @Get('')
  @UseGuards(ApiKeyGuard)
  @ApiOperation({ summary: 'Get weather' })
  @ApiOkResponse({
    status: 200,
    description: 'Example response',
    type: WeatherResponseSchema,
  })
  @ApiBody({
    description: 'Filters',
    type: FilterWeatherDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBadRequestResponse({
    description: 'Missing data in body',
    type: WeatherBadResponseSchema,
  })
  async findOne(
    @Body() FilterWeather: FilterWeatherDto,
  ): Promise<WeatherResponseSchema> {
    return await this.weathersService.find(FilterWeather);
  }
}
