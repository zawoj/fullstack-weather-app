"use client";

import { useContext } from "react";
import { AppContext } from ".";

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context)
    throw new Error("useAppContext context must be use inside AppProvider");

  return context;
};
