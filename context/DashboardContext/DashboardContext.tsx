import { createContext, Dispatch } from "react";
import { ActionType } from "./Types";
import { initialContextValue, InitialState } from "./Interfaces";

interface Props {
  state: InitialState;
  dispatch: Dispatch<ActionType>;
}

export const DashboardContext = createContext<Props>({
  state: initialContextValue,
  dispatch: () => {},
});
