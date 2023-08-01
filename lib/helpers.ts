import { Action, Task, Template } from "@/context/Interfaces";

  export const getActionTitleById = (actionId: string, actions: Action[]) => {
    const actionName = actions.find(
      (action) => action.actionId === actionId
    )?.title;
    return actionName;
  };

  export const getTemplateNameById = (templateId: string, templates: Template[]) => {
    const templateName = templates.find(
      (template) => template.templateId === templateId
    )?.name;
    return templateName;
  };

    export const applyTemplateId = (tempId: string, tasks: Task[]) => {
    tasks.map((task) => {
      task.templateId = tempId;
      return task;
    });
  };