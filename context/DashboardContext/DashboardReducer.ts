import { ActionType } from "../Types";
import { InitialState } from "../Interfaces";



export function Reducer(state: InitialState, action: ActionType): InitialState {
  switch (action.type) {
    case 'SET_INITIAL_STATE':
    return {
      ...state,
      actions: action.payload.actions,
      tasks: action.payload.tasks,
      templates: action.payload.templates,
      schedules: action.payload.schedules,
      toast: action.payload.toast,
    };
    case "ADD_ACTION":
      return { ...state, actions: [...state.actions, action.payload] };
    case "UPDATE_ACTION":
      return {
        ...state,
        actions: state.actions.map((currentAction) =>
          currentAction.id === action.payload.id ? action.payload : currentAction
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
          currentTask.id === action.payload.id ? action.payload : currentTask
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
          currentSchedule.id === action.payload.id ? action.payload : currentSchedule
        ),
      };
    case "DELETE_SCHEDULE":
    return {
      ...state,
      schedules: state.schedules.filter((currentSchedule) => currentSchedule.id !== action.payload),
    };
    case "SHOW_TOAST":
      return {
        ...state, toast: {message: action.payload.message, type: action.payload.type}
      }
    case "CLEAR_TOAST":
      return {
        ...state, toast: {message: "", type: "notice"}
      }
    default:
      return state;
      
  }
}