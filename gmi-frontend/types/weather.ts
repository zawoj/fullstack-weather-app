type CoordType = {
  lon: number;
  lat: number;
};

type WeatherType = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type MainType = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

type WindType = {
  speed: number;
  deg: number;
};

type CloudsType = {
  all: number;
};

type SysType = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

enum UnitsEnum {
  METRIC = "metric",
  IMPERIAL = "imperial",
  STANDARD = "standard",
}

type WeatherResponseType = {
  coord: CoordType;
  weather: WeatherType[];
  base: string;
  main: MainType;
  visibility: number;
  wind: WindType;
  clouds: CloudsType;
  dt: number;
  sys: SysType;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export { WeatherResponseType, UnitsEnum };
