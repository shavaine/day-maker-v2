import { Action, InitialState, Schedule, Task, Template, ToastInterface } from "./Interfaces";

export type ActionType =
  | { type: "SET_INITIAL_STATE"; payload: InitialState }
  | { type: "ADD_ACTION"; payload: Action }
  | { type: "UPDATE_ACTION"; payload: Action }
  | { type: "DELETE_ACTION"; payload: string } // payload is the actionId
  | { type: "ADD_TEMPLATE"; payload: Template }
  | { type: "UPDATE_TEMPLATE"; payload: Template }
  | { type: "DELETE_TEMPLATE"; payload: string } // payload is templateId
  | { type: "ADD_TASK"; payload: Task }
  | { type: "UPDATE_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string } // payload is taskId
  | { type: "ADD_SCHEDULE"; payload: Schedule }
  | { type: "UPDATE_SCHEDULE"; payload: Schedule }
  | { type: "DELETE_SCHEDULE"; payload: string }
  | { type: "SHOW_TOAST"; payload: ToastInterface }
  | { type: "CLEAR_TOAST"; };


