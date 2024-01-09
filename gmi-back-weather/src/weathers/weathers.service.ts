import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FilterWeatherDto } from './dto/filter-weather.dto';
import { Observable, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { WeatherResponseType } from 'types/API';

@Injectable()
export class WeathersService {
  constructor(private httpService: HttpService) {}

  find(filterWeatherDto: FilterWeatherDto): Observable<WeatherResponseType> {
    try {
      const apiKey = process.env.OPENWEATHERMAP_API_KEY;
      let url = 'https://api.openweathermap.org/data/2.5/weather?';

      if (filterWeatherDto.location) {
      } else if (filterWeatherDto.lat && filterWeatherDto.lon) {
        url += `lat=${filterWeatherDto.lat}&lon=${filterWeatherDto.lon}`;
      } else {
        throw new Error('Invalid location data');
      }

      url += `&appid=${apiKey}`;

      if (filterWeatherDto.units) {
        url += `&units=${filterWeatherDto.units}`;
      }

      if (filterWeatherDto.lang) {
        url += `&lang=${filterWeatherDto.lang}`;
      }

      return this.httpService
        .get<WeatherResponseType>(url)
        .pipe(map((response) => response.data));
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'There was a problem with the external weather API',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
