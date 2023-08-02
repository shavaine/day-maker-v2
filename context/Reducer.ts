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
    case "ADD_TEMPLATE":
      return { ...state, templates: [...state.templates, action.payload] };
    case "UPDATE_TEMPLATE":
      return {
        ...state,
        templates: state.templates.map((currentTemplate) =>
          currentTemplate.templateId === action.payload.templateId ? action.payload : currentTemplate
        ),
      };
    case "DELETE_TEMPLATE":
    return {
      ...state,
      templates: state.templates.filter((currentTemplate) => currentTemplate.templateId !== action.payload),
    };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((currentTask) =>
          currentTask.taskId === action.payload.taskId ? action.payload : currentTask
        ),
      };
    case "DELETE_TASK":
    return {
      ...state,
      tasks: state.tasks.filter((currentTask) => currentTask.taskId !== action.payload),
    };
    default:
      return state;
      
  }
}