import { UnitsEnum } from "../types/weather";

export const getUnitString = (unit: UnitsEnum): string => {
  switch (unit) {
    case UnitsEnum.METRIC:
      return " (°C)";
    case UnitsEnum.IMPERIAL:
      return " (°F)";
    case UnitsEnum.STANDARD:
      return " (K)";
    default:
      return "Unknown Unit";
  }
};
