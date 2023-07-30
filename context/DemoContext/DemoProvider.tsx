"use client";
import { FC, useReducer } from "react";
import { initialState } from "../InitialData";
import { Reducer } from "../Reducer";
import { DemoContext } from "./DemoContext";

interface DemoProviderProps {
  children: React.ReactNode;
}

export const DemoProvider: FC<DemoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <DemoContext.Provider value={{ state, dispatch }}>
      {children}
    </DemoContext.Provider>
  );
};
