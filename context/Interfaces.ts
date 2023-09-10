export interface Action {
  id: string;
  title: string;
  userId: string;
}

export interface Task {
  id: string;
  notes: string | null;
  startTime: number;
  endTime: number;
  actionId: string;
  templateId: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  userId: string;
}

export interface Schedule {
  id: string;
  date: Date;
  templateId: string;
  userId: string;
}

export interface Toast {
  message: string;
  type: "success" | "error" | "notice"
}

export interface InitialState {
    actions: Action[];
    tasks: Task[];
    templates: Template[];
    schedules: Schedule[];
    toast: Toast;
}

export const initialContextValue: InitialState = {
  actions: [],
  tasks: [],
  templates: [],
  schedules: [],
  toast: {message: "", type: "notice"}
};