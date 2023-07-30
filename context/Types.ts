import { Action } from "./Interfaces";

export type ActionType =
  | { type: "ADD_ACTION"; payload: Action }
  | { type: "UPDATE_ACTION"; payload: Action }
  | { type: "DELETE_ACTION"; payload: string } // payload is the actionId
  | { type: "DELETE_TEMPLATE"; payload: string }
