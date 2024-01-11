import { WeatherResponseSchema } from 'src/weathers/schema/weathers.schema';

export const APIResponse: WeatherResponseSchema = {
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
};
