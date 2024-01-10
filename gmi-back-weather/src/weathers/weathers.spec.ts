import { Test, TestingModule } from '@nestjs/testing';
import { WeathersController } from './weathers.controller';
import { WeathersService } from './weathers.service';
import { ApiKeyGuard } from '../../src/auth/guards/apikey.guard';

import { CacheModule } from '@nestjs/cache-manager';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { AxiosResponse } from 'axios';

describe('WeathersController', () => {
  // let controller: WeathersController;
  let service: WeathersService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CacheModule.register()],
      controllers: [WeathersController],
      providers: [
        WeathersService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(), // Provide a mock implementation
          },
        },
      ],
    })
      .overrideGuard(ApiKeyGuard)
      .useValue({ canActivate: () => true })
      .compile();

    service = module.get<WeathersService>(WeathersService);
    httpService = module.get<HttpService>(HttpService);
    // controller = module.get<WeathersController>(WeathersController);
  });

  it('should call the OpenWeatherMap API with correct query parameters', async () => {
    if (!httpService) {
      throw new Error('HttpService not defined');
    }
    const filterWeatherDto = { location: 'Warsaw' };
    const response = {
      data: {
        coord: {
          lon: 21.0118,
          lat: 52.2298,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n',
          },
        ],
        base: 'stations',
        main: {
          temp: -8.01,
          feels_like: -10.97,
          temp_min: -10.2,
          temp_max: -5.68,
          pressure: 1038,
          humidity: 66,
        },
        visibility: 10000,
        wind: {
          speed: 1.54,
          deg: 260,
        },
        clouds: {
          all: 0,
        },
        dt: 1704817011,
        sys: {
          type: 2,
          id: 2035775,
          country: 'PL',
          sunrise: 1704782566,
          sunset: 1704811340,
        },
        timezone: 3600,
        id: 756135,
        name: 'Warsaw',
        cod: 200,
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    jest
      .spyOn(httpService, 'get')
      .mockImplementationOnce(() => of(response as AxiosResponse));

    const result = await service.find(filterWeatherDto);

    expect(httpService.get).toHaveBeenCalledWith(
      expect.stringContaining(`q=${filterWeatherDto.location}`),
    );
    expect(result).toEqual(response.data);
  });

  it('should call the OpenWeatherMap API with correct query parameters', async () => {
    if (!httpService) {
      throw new Error('HttpService not defined');
    }
    const filterWeatherDto = { lat: 52.2298, lon: 21.0118 };
    const response = {
      data: {
        coord: {
          lon: 21.0118,
          lat: 52.2298,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n',
          },
        ],
        base: 'stations',
        main: {
          temp: -8.01,
          feels_like: -10.97,
          temp_min: -10.2,
          temp_max: -5.68,
          pressure: 1038,
          humidity: 66,
        },
        visibility: 10000,
        wind: {
          speed: 1.54,
          deg: 260,
        },
        clouds: {
          all: 0,
        },
        dt: 1704817011,
        sys: {
          type: 2,
          id: 2035775,
          country: 'PL',
          sunrise: 1704782566,
          sunset: 1704811340,
        },
        timezone: 3600,
        id: 756135,
        name: 'Warsaw',
        cod: 200,
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    jest
      .spyOn(httpService, 'get')
      .mockImplementationOnce(() => of(response as AxiosResponse));

    const result = await service.find(filterWeatherDto);

    expect(httpService.get).toHaveBeenCalledWith(
      expect.stringContaining(
        `lat=${filterWeatherDto.lat}&lon=${filterWeatherDto.lon}`,
      ),
    );
    expect(result).toEqual(response.data);
  });

  it('should throw an error if no location or lat and lon is set', async () => {
    const filterWeatherDto = {};
    await expect(service.find(filterWeatherDto)).rejects.toThrow(
      'Invalid location data',
    );
  });
});
