"use client";
import { FC, useReducer } from "react";
import { initialState } from "../InitialData";
import { Reducer } from "../Reducer";
import { DashboardContext } from "./DashboardContext";

interface DashboardProviderProps {
  children: React.ReactNode;
}

export const DashboardProvider: FC<DashboardProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};
