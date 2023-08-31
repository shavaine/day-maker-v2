"use client";
import { FC, useReducer } from "react";
import { Reducer } from "./DashboardReducer";
import { DashboardContext } from "./DashboardContext";
import { InitialState } from "../Interfaces";

interface DashboardProviderProps {
  children: React.ReactNode;
  initialState: InitialState;
}

export const DashboardProvider: FC<DashboardProviderProps> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};
