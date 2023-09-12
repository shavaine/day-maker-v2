import { createContext, Dispatch } from "react";
import { ActionType } from "../Types";
import { InitialState } from "../Interfaces";

interface Props {
  state: InitialState;
  dispatch: Dispatch<ActionType>;
}
export const initialDashboardState: InitialState = {
  actions: [],
  tasks: [],
  templates: [],
  schedules: [],
  toast: { message: "", type: "notice" },
};

export const DashboardContext = createContext<Props>({
  state: initialDashboardState,
  dispatch: () => {},
});
