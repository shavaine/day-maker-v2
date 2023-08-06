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

  export const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(
      remainingMinutes
    ).padStart(2, "0")}`;
  }

  export const formatTimeType = (time: string) => {
    const [hours, minutes] = time.split(":");
    const newHours = Number(hours) > 12 ? Number(hours) - 12 : Number(hours);
    if (Number(hours) > 11) {
      return `${String(newHours)}:${minutes.padStart(2, "0")}PM`
    } else {
      return `${String(newHours)}:${minutes.padStart(2, "0")}AM`
    }
  }

  export const formatCustomDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  