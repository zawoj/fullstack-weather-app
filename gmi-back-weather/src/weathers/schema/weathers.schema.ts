import { ApiProperty } from '@nestjs/swagger';
import {
  CoordType,
  WeatherType,
  MainType,
  WindType,
  CloudsType,
  SysType,
} from 'types/API';

class WeatherResponseSchema {
  @ApiProperty({
    description: 'Coordinates',
    example: {
      lon: 21.0118,
      lat: 52.2298,
    },
    format: 'object',
  })
  coord: CoordType;
  @ApiProperty({
    description: 'Weather',
    example: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01n',
      },
    ],
    format: 'array',
  })
  weather: WeatherType[];

  @ApiProperty({
    description: 'Base',
    example: 'stations',
    format: 'string',
  })
  base: string;

  @ApiProperty({
    description: 'Main',
    example: {
      temp: -8.01,
      feels_like: -10.97,
      temp_min: -10.2,
      temp_max: -5.68,
      pressure: 1038,
      humidity: 66,
    },
    format: 'object',
  })
  main: MainType;

  @ApiProperty({
    description: 'Visibility',
    example: 10000,
    format: 'number',
  })
  visibility: number;

  @ApiProperty({
    description: 'Wind',
    example: {
      speed: 1.54,
      deg: 260,
    },
    format: 'object',
  })
  wind: WindType;

  @ApiProperty({
    description: 'Clouds',
    example: {
      all: 0,
    },
    format: 'object',
  })
  clouds: CloudsType;

  @ApiProperty({
    description: 'dt',
    example: 1704817011,
    format: 'number',
  })
  dt: number;

  @ApiProperty({
    description: 'Sys',
    example: {
      type: 2,
      id: 2035775,
      country: 'PL',
      sunrise: 1704782566,
      sunset: 1704811340,
    },
    format: 'object',
  })
  sys: SysType;

  @ApiProperty({
    description: 'Timezone',
    example: 3600,
    format: 'number',
  })
  timezone: number;

  @ApiProperty({
    description: 'City ID',
    example: 756135,
    format: 'number',
  })
  id: number;

  @ApiProperty({
    description: 'City name',
    example: 'Warsaw',
    format: 'string',
  })
  name: string;

  @ApiProperty({
    description: 'Cod',
    example: 200,
    format: 'number',
  })
  cod: number;
}

class WeatherBadResponseSchema {
  @ApiProperty({
    description: 'statusCode',
    example: '400',
    format: 'string',
  })
  statusCode: string;

  @ApiProperty({
    description: 'timestamp',
    example: '2021-03-08T20:38:05.000Z',
    format: 'string',
  })
  timestamp: string;

  @ApiProperty({
    description: 'path',
    example: '/weathers',
    format: 'string',
  })
  path: string;

  @ApiProperty({
    description: 'message',
    example: 'Invalid location data',
    format: 'string',
  })
  message: string;
}

export { WeatherResponseSchema, WeatherBadResponseSchema };
