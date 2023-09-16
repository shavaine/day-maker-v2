"use client";
import { FC, useReducer } from "react";
import { initialState } from "./DemoInitialData";
import Reducer from "./DemoReducer";
import { DemoContext } from "./DemoContext";
import Toast from "@/components/Toast/Toast";

interface Props {
  children: React.ReactNode;
}

const DemoProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <DemoContext.Provider value={{ state, dispatch }}>
      <Toast message={state.toast.message} type={state.toast.type} />
      {children}
    </DemoContext.Provider>
  );
};

export default DemoProvider;
