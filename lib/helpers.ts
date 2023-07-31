import { Action, Task } from "@/context/Interfaces";

  export const getActionTitleById = (actionId: string, actions: Action[]) => {
    const actionName = actions.find(
      (action) => action.actionId === actionId
    )?.title;
    return actionName;
  };

    export const applyTemplateId = (tempId: string, tasks: Task[]) => {
    tasks.map((task) => {
      task.templateId = tempId;
      return task;
    });
  };