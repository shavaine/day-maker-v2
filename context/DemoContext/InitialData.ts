import { Action, Task, Template, Schedule, InitialState } from "./Interfaces";

const actions: Action[] = [
  { actionId: 'clkniwd650000356kel7co7pw', title: "Take out the trash" },
  { actionId: 'clknix59w00003p6ozop5d3ox', title: "Wash dishes" },
];

const templates: Template[] = [
  {
    templateId: 'clknixo2i00003p6otb9qn1bq',
    name: "Chores",
    description: "My daily chores.",
  },
  {
    templateId: 'clknixyhg00003p6obzh9zswy',
    name: "To-do",
    description: "A list of things I need to do.",
  },
];

const tasks: Task[] = [
  {
    taskId: 'clkniyd8s00003p6ox5t14kk5',
    notes: "Make sure to complete by friday.",
    startTime: "2023-07-28T08:00:00",
    endTime: "2023-07-28T10:00:00",
    actionId: actions[0].actionId,
    templateId: templates[0].templateId,
  },
  {
    taskId: 'clkniympd00003p6oll5h77kn',
    notes: "Clean sink before starting.",
    startTime: "2023-07-28T11:00:00",
    endTime: "2023-07-28T13:00:00",
    actionId: actions[1].actionId,
    templateId: templates[1].templateId,
  },
];



const schedules: Schedule[] = [
  {
    scheduleId: 'clkniyxhs00003p6ob1q5xq2y',
    date: "2023-07-28",
    templateId: templates[0].templateId,
  },
];

export const initialState: InitialState = {
  actions: actions,
  tasks: tasks,
  templates: templates,
  schedules: schedules,
};
