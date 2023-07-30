import { InitialState } from "./Interfaces";
import { ActionType } from "./Types";


export function Reducer(state: InitialState, action: ActionType): InitialState {
  switch (action.type) {
    case "ADD_ACTION":
      return { ...state, actions: [...state.actions, action.payload] };
    case "UPDATE_ACTION":
      return {
        ...state,
        actions: state.actions.map((currentAction) =>
          currentAction.actionId === action.payload.actionId ? action.payload : currentAction
        ),
      };
    case "DELETE_ACTION":
      return {
        ...state,
        actions: state.actions.filter((currentAction) => currentAction.actionId !== action.payload),
      };
      case "DELETE_TEMPLATE":
      return {
        ...state,
        templates: state.templates.filter((currentTemplate) => currentTemplate.templateId !== action.payload),
      };
    default:
      return state;
  }
}