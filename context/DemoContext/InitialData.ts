import { Action, Task, Template, Schedule, InitialState } from "./Interfaces";

const actions: Action[] = [
  { actionId: 'clkniwd650000356kel7co7pw', title: "Take out the trash" },
  { actionId: 'clknix59w00003p6ozop5d3ox', title: "Wash dishes" },
  { actionId: 'cla627c0e000108md2m8n113p', title: "Clean Room" },
  { actionId: 'clqk27n0n000208md3rxh2hf2', title: "Pick-up Dinner" },
  { actionId: 'cld6282l7000308mdagfb0fe7  ', title: "Prepare Lunch" },
  { actionId: 'cly62887j000408md8syn4459  ', title: "Eat Breakfast" },
  { actionId: 'clb628lu2000508md8ccm6cl9 ', title: "Go For A Jog" },
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
    startTime: 600,
    endTime: 660,
    actionId: actions[0].actionId,
    templateId: templates[0].templateId,
  },
  {
    taskId: 'clkniympd00003p6oll5h77kn',
    notes: "Clean sink before starting.",
    startTime: 720,
    endTime: 780,
    actionId: actions[1].actionId,
    templateId: templates[1].templateId,
  },
];

let todaysDate = new Date(Date.now());

const schedules: Schedule[] = [
  {
    scheduleId: 'clkniyxhs00003p6ob1q5xq2y',
    date: todaysDate,
    templateId: templates[0].templateId,
  },
];

export const initialState: InitialState = {
  actions: actions,
  tasks: tasks,
  templates: templates,
  schedules: schedules,
};
