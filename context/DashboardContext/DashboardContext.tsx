import { createContext, Dispatch } from "react";
import { initialState } from "../InitialData";
import { InitialState } from "../Interfaces";
import { ActionType } from "../Types";

interface Props {
  state: InitialState;
  dispatch: Dispatch<ActionType>;
}

export const DashboardContext = createContext<Props>({
  state: initialState,
  dispatch: () => {},
});