export interface Action {
  actionId: string;
  title: string;
}

export interface Task {
  taskId: string;
  notes: string;
  startTime: number;
  endTime: number;
  actionId: string;
  templateId: string;
}

export interface Template {
  templateId: string;
  name: string;
  description: string;
}

export interface Schedule {
  scheduleId: string;
  date: Date;
  templateId: string;
}

export interface InitialState {
    actions: Action[];
    tasks: Task[];
    templates: Template[];
    schedules: Schedule[];
}