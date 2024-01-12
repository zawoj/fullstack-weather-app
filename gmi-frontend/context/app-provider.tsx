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
import { UnitsEnum } from "../types/weather";
import i18n from "../i18n/config";

const initialState: AppStateType = {
  weather: null,
  loading: true,
  filters: {
    location: "Warsaw",
    units: UnitsEnum.METRIC,
    lang: i18n.locale,
  },
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
    case Types.SETFILTERS:
      return {
        ...state,
        filters: action.payload.filters,
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

  const getWeather = useCallback(async () => {
    const filters = state.filters;
    let url = new URL(`${API_URL}/weathers`);

    const headers = {
      "x-api-key": `${process.env.EXPO_PUBLIC_API_KEY}`,
    };

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
      const weather = await response.json();

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
  }, [state.filters]);

  const setFilters = (filters: FiltersType) => {
    if (filters.lang) {
      i18n.locale = filters.lang;
    }

    dispatch({
      type: Types.SETFILTERS,
      payload: { filters },
    });
  };

  const memoizedValue = useMemo(
    () => ({
      ...state,
      getWeather,
      setFilters,
    }),
    [state, getWeather, setFilters]
  );

  return (
    <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>
  );
}
