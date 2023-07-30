import { createContext, Dispatch } from "react";
import { initialState } from "../InitialData";
import { InitialState } from "../Interfaces";
import { ActionType } from "../Types";

export const DemoContext = createContext<{
  state: InitialState;
  dispatch: Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => {},
});
