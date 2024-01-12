import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FilterWeatherDto } from './dto/filter-weather.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { WeatherResponseSchema } from './schema/weathers.schema';

@Injectable()
export class WeathersService {
  constructor(private httpService: HttpService) {}

  async find(
    filterWeatherDto: FilterWeatherDto,
  ): Promise<WeatherResponseSchema> {
    try {
      const apiKey = process.env.OPENWEATHERMAP_API_KEY;
      let url = 'https://api.openweathermap.org/data/2.5/weather?';

      if (filterWeatherDto.location) {
        url += `q=${filterWeatherDto.location}`;
      } else if (filterWeatherDto.lat && filterWeatherDto.lon) {
        url += `lat=${filterWeatherDto.lat}&lon=${filterWeatherDto.lon}`;
      } else {
        throw new Error('Invalid location data');
      }

      url += `&appid=${apiKey}`;

      if (filterWeatherDto.units) {
        url += `&units=${filterWeatherDto.units}`;
      } else {
        url += `&units=metric`;
      }

      if (filterWeatherDto.lang) {
        url += `&lang=${filterWeatherDto.lang}`;
      }

      const { data } = await firstValueFrom(this.httpService.get(url));
      return data;
    } catch (error) {
      if (error.response.data.cod === '404') {
        throw new HttpException(
          error.response.data.message,
          HttpStatus.NOT_FOUND,
        );
      } else {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    }
  }
}
