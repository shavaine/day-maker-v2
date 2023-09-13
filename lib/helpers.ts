import { Action, Task, Template } from "@/context/Interfaces";
import { ActionType } from "@/context/Types";
import { Dispatch, SetStateAction } from "react";

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
    const newHours = hours === "00" || hours === "12" ? 12 : Number(hours) % 12;
    const period = Number(hours) >= 12 ? "PM" : "AM";
    return `${String(newHours).padStart(2, "0")}:${minutes.padStart(2, "0")}${period}`;
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

  const createTask = async (task: Task) => {
      const res = await fetch("/api/tasks/create", {
        method: "POST",
        body: JSON.stringify({
          notes: task.notes,
          startTime: task.startTime,
          endTime: task.endTime,
          actionId: task.actionId,
          templateId: task.templateId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newTask: Task = await res.json();
      return newTask;
  }

  export const createTasks = async (tasks: Task[]) => {
    const finishedTaskPromises = tasks.map((task) => createTask(task));
    const finishedTasks = await Promise.all(finishedTaskPromises); 
    return finishedTasks;
  };

  interface showFormToastProps {
    message: string;
    dispatch: Dispatch<ActionType>;
    setLoading: Dispatch<SetStateAction<boolean>>

  }
  export const showErrorToast = async ({message, dispatch, setLoading}: showFormToastProps) => {
    dispatch({
      type: "SHOW_TOAST",
      payload: {
        message: message,
        type: "error",
      },
    });
    setTimeout(() => {
      dispatch({ type: "CLEAR_TOAST" });
      setLoading(false);
    }, 3000);
};