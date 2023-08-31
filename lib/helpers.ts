import { Action, Task, Template } from "@/context/Interfaces";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";

  export const getActionTitleById = (actionId: string, actions: Action[]) => {
    const actionName = actions.find(
      (action) => action.id === actionId
    )?.title;
    return actionName;
  };

  export const getTemplateNameById = (templateId: string, templates: Template[]) => {
    const templateName = templates.find(
      (template) => template.id === templateId
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
      return `${String(newHours)}:${minutes.padStart(2, "0")} PM`
    } else {
      return `${String(newHours)}:${minutes.padStart(2, "0")} AM`
    }
  }

  export const formatStringToDate = (date: string) => {
    const [year, month, day] = date!.split('-').map(Number);

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      throw new Error("Invalid date format. Please provide a valid yyyy-mm-dd date string.");
    }

    const newDate = new Date(year, month - 1, day, 12, 0, 0);
    return newDate;
  }

  export const formatDateToString = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  export const formatCustomDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  export const getCalendarData = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startOffset = firstDay.getDay();
    const endOffset = 6 - lastDay.getDay();

    const calendarData = [];
    // Padding for days before the first day
    for (let i = 0; i < startOffset; i++) {
      calendarData.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendarData.push(new Date(year, month, day));
    }
    // Padding for days before the last day
    for (let i = 0; i < endOffset; i++) {
      calendarData.push(null);
    }

    return calendarData;
  }

  // export const getCorrectContext = (DemoContext: React, DashboardContext, path) => {
  //   if(path.includes('dashboard')) {
  //     return DemoContext
  //   }

  //   if(path.includes('demo')) {
  //     return DashboardContext
  //   }
  // }