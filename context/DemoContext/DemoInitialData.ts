import { Action, Task, Template, Schedule, InitialState, Toast } from "../Interfaces";

const user = {
  email: "demoUser@daymaker.ca",
  emailVerified: null,
  id: "1234",
  image: null,
  name: "John Doe"
}

const toast: Toast = {
  message: "",
  type: "notice"
}

const actions: Action[] = [
  { id: 'clkniwd650000356kel7co7pw', title: "Take out the trash", userId: user.id },
  { id: 'clknix59w00003p6ozop5d3ox', title: "Wash dishes", userId: user.id },
  { id: 'cla627c0e000108md2m8n113p', title: "Clean Room", userId: user.id },
  { id: 'clqk27n0n000208md3rxh2hf2', title: "Pick-up Dinner", userId: user.id },
  { id: 'cld6282l7000308mdagfb0fe7  ', title: "Prepare Lunch", userId: user.id },
  { id: 'cly62887j000408md8syn4459  ', title: "Eat Breakfast", userId: user.id },
  { id: 'clb628lu2000508md8ccm6cl9 ', title: "Go For A Jog", userId: user.id },
];

const templates: Template[] = [
  {
    id: 'clknixo2i00003p6otb9qn1bq',
    name: "Chores",
    description: "My daily chores.",
    userId: user.id
  },
  {
    id: 'clknixyhg00003p6obzh9zswy',
    name: "To-do",
    description: "A list of things I need to do.",
    userId: user.id
  },
];

const tasks: Task[] = [
  {
    id: 'clkniyd8s00003p6ox5t14kk5',
    notes: "Make sure to complete by friday.",
    startTime: 600,
    endTime: 660,
    actionId: actions[0].id,
    templateId: templates[0].id,
  },
  {
    id: 'clkniympd00003p6oll5h77kn',
    notes: "Clean sink before starting.",
    startTime: 720,
    endTime: 780,
    actionId: actions[1].id,
    templateId: templates[1].id,
  },
];

let todaysDate = new Date(Date.now());

const schedules: Schedule[] = [
  {
    id: 'clkniyxhs00003p6ob1q5xq2y',
    date: todaysDate,
    templateId: templates[0].id,
    userId: user.id
  },
];

export const initialState: InitialState = {
  actions: actions,
  tasks: tasks,
  templates: templates,
  schedules: schedules,
  toast: toast
};
