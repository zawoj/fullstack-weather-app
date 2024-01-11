"use client";

import React, { useReducer, useCallback, useMemo } from "react";
import {
  ActionsType,
  AppStateType,
  FiltersType,
  Types,
} from "../types/context";
import { API_URL } from "../constants/API";
import { AppContext } from "./app-context";

const initialState: AppStateType = {
  weather: null,
  loading: true,
  error: "",
};

const reducer = (state: AppStateType, action: ActionsType) => {
  switch (action.type) {
    case Types.INITIAL:
    case Types.GETWEATHER:
      return {
        ...state,
        weather: action.payload.weather,
        loading: false,
      };
    case Types.SETERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

type Props = {
  children: React.ReactNode;
};

export function AppProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getWeather = useCallback(async (filters: FiltersType) => {
    // Budowanie URL z podstawowym adresem API
    let url = new URL(`${API_URL}/weather`);

    // Dodawanie klucza API do nagłówków
    const headers = {
      "x-api-key": `${process.env.EXPO_PUBLIC_API_KEY}`,
    };

    // Dodawanie opcjonalnych parametrów do URL
    if (filters.location) {
      url.searchParams.append("location", filters.location);
    } else if (filters.lon && filters.lat) {
      url.searchParams.append("lon", filters.lon.toString());
      url.searchParams.append("lat", filters.lat.toString());
    }

    if (filters.units) {
      url.searchParams.append("units", filters.units);
    }

    try {
      const response = await fetch(url.toString(), { headers });
      // const weather = await response.json();
      const weather = {
        coord: {
          lon: 21.0118,
          lat: 52.2298,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        base: "stations",
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
          country: "PL",
          sunrise: 1704782566,
          sunset: 1704811340,
        },
        timezone: 3600,
        id: 756135,
        name: "Warsaw",
        cod: 200,
      };

      dispatch({
        type: Types.GETWEATHER,
        payload: { weather },
      });
    } catch (error) {
      let errorMessage = "Unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch({
        type: Types.SETERROR,
        payload: { error: errorMessage },
      });
    }
  }, []);

  const memoizedValue = useMemo(
    () => ({
      ...state,
      getWeather,
    }),
    [state, getWeather]
  );

  return (
    <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>
  );
}
