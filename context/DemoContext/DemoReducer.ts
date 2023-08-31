import { InitialState } from "../Interfaces";
import { ActionType } from "../Types";


export function Reducer(state: InitialState, action: ActionType): InitialState {
  switch (action.type) {
    case "ADD_ACTION":
      return { ...state, actions: [...state.actions, action.payload] };
    case "UPDATE_ACTION":
      return {
        ...state,
        actions: state.actions.map((currentAction) =>
          currentAction.id === action.payload.actionId ? action.payload : currentAction
        ),
      };
    case "DELETE_ACTION":
      return {
        ...state,
        actions: state.actions.filter((currentAction) => currentAction.id !== action.payload),
      };
    case "ADD_TEMPLATE":
      return { ...state, templates: [...state.templates, action.payload] };
    case "UPDATE_TEMPLATE":
      return {
        ...state,
        templates: state.templates.map((currentTemplate) =>
          currentTemplate.id === action.payload.id ? action.payload : currentTemplate
        ),
      };
    case "DELETE_TEMPLATE":
    return {
      ...state,
      templates: state.templates.filter((currentTemplate) => currentTemplate.id !== action.payload),
    };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((currentTask) =>
          currentTask.id === action.payload.taskId ? action.payload : currentTask
        ),
      };
    case "DELETE_TASK":
    return {
      ...state,
      tasks: state.tasks.filter((currentTask) => currentTask.id !== action.payload),
    };
    case "ADD_SCHEDULE":
      return { ...state, schedules: [...state.schedules, action.payload] };
    case "UPDATE_SCHEDULE":
      return {
        ...state,
        schedules: state.schedules.map((currentSchedule) =>
          currentSchedule.id === action.payload.scheduleId ? action.payload : currentSchedule
        ),
      };
    case "DELETE_SCHEDULE":
    return {
      ...state,
      schedules: state.schedules.filter((currentSchedule) => currentSchedule.id !== action.payload),
    };
    default:
      return state;
      
  }
}