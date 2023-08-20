"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Task, Template } from "@/context/Interfaces";
import { useRouter } from "next/navigation";
import { FC, useContext, useState } from "react";
import CreateTaskModal from "../Modals/CreateTaskModal";
import { applyTemplateId } from "@/lib/helpers";
import { generateCUID } from "@/lib/generateCUID";
import TaskCard from "./TaskCard";

interface Props {
  name: string;
  description: string;
  tasks: Task[];
  tempId: string;
}
const EditTemplateCard: FC<Props> = ({ name, description, tasks, tempId }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(DemoContext);
  const [templateName, setTemplateName] = useState<string>(name);
  const [templateDescription, setTemplateDescription] =
    useState<string>(description);
  const [templateTasks, setTemplateTasks] = useState<Task[]>(tasks);

  // Dispatch Multiple tasks to central state
  const dispatchTasks = (tasks: Task[]) => {
    tasks.forEach((task) => {
      // Updates Task in global state if it already exist
      if (state.tasks.includes(task)) {
        dispatch({ type: "UPDATE_TASK", payload: task });
      }
      // Adds Task to global state if it doesn't exist
      if (!state.tasks.includes(task)) {
        dispatch({ type: "ADD_TASK", payload: task });
      }
    });
  };

  // Deletes Task from global state if deleted in template
  const removeDeletedTasks = (tasks: Task[]) => {
    tasks.forEach((task) => {
      if (task.templateId === tempId && !templateTasks.includes(task)) {
        dispatch({ type: "DELETE_TASK", payload: task.taskId });
      }
    });
  };

  // Allows nested form to add tasks to local state
  const addTemplateTask = (task: Task) => {
    setTemplateTasks([...templateTasks, task]);
  };

  const deleteTemplateTask = (toDeleteTask: Task) => {
    const newTemplateTasks = templateTasks.filter(
      (task) => task.taskId !== toDeleteTask.taskId
    );
    setTemplateTasks([...newTemplateTasks]);
  };

  const handleSubmit = () => {
    const currentTemplate: Template = {
      templateId: tempId,
      name: templateName,
      description: templateDescription,
    };

    applyTemplateId(currentTemplate.templateId, templateTasks);

    if (templateName.trim() !== "") {
      dispatch({ type: "UPDATE_TEMPLATE", payload: currentTemplate });
      dispatchTasks(templateTasks);
      removeDeletedTasks(state.tasks);
      router.push("/demo/templates");
    }
  };

  return (
    <div className="flex flex-col gap-y-14 font-spaceMono">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col">
          <label className="text-black text-sm" htmlFor="templateName">
            Title
          </label>
          <input
            type="text"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            placeholder="Enter Title"
            id="templateName"
            className="border rounded-md px-3 py-2 w-full focus:outline-mainColor"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-black text-sm" htmlFor="">
            Description
          </label>
          <textarea
            value={templateDescription}
            placeholder="Enter a Description"
            onChange={(e) => setTemplateDescription(e.target.value)}
            rows={4}
            id="templateId"
            className="border rounded-md px-3 py-2 focus:outline-mainColor"
          />
        </div>
        <label className="text-black text-sm" htmlFor="">
          Tasks:
        </label>
        <CreateTaskModal addTemplateTasks={addTemplateTask} />
        {templateTasks
          .sort((a, b) => a.startTime - b.startTime)
          .map((task) => (
            <TaskCard
              key={task.taskId}
              task={task}
              actions={state.actions}
              removeTask={deleteTemplateTask}
            />
          ))}
      </div>

      <div className="flex flex-row justify-end gap-x-2">
        <button
          onClick={() => router.back()}
          className="border w-24 rounded-lg p-1 hover:font-bold"
          type="button"
        >
          Cancel
        </button>
        <button
          className="border w-24 rounded-lg bg-mainColor p-1 text-white hover:font-bold hover:opacity-80"
          type="button"
          onClick={() => handleSubmit()}
        >
          Change
        </button>
      </div>
    </div>
  );
};
export default EditTemplateCard;
