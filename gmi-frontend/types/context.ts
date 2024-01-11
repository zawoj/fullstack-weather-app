import { UnitsEnum, WeatherResponseType } from "./weather";

type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type FiltersType = {
  location?: string;
  lat?: number;
  lon?: number;
  units?: UnitsEnum;
  lang?: string;
};

type AppContextType = {
  loading: boolean;
  error: null | string;
  weather: null | WeatherResponseType;
  filters: FiltersType;
  getWeather: (filters: FiltersType) => Promise<void>;
  setFilters: (filters: FiltersType) => void;
};

type AppStateType = {
  loading: boolean;
  error: null | string;
  weather: null | WeatherResponseType;
  filters: FiltersType;
};

enum Types {
  INITIAL = "INITIAL",
  GETWEATHER = "GETWEATHER",
  SETERROR = "SETERROR",
  SETFILTERS = "SETFILTERS",
}

type Payload = {
  [Types.INITIAL]: { weather: WeatherResponseType };
  [Types.GETWEATHER]: { weather: WeatherResponseType };
  [Types.SETERROR]: { error: string };
  [Types.SETFILTERS]: { filters: FiltersType };
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

export {
  AppContextType,
  FiltersType,
  AppStateType,
  ActionMapType,
  Types,
  Payload,
  ActionsType,
};
