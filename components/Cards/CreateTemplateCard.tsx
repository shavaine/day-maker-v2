"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Task, Template } from "@/context/Interfaces";
import { useRouter } from "next/navigation";
import { FC, useContext, useState } from "react";
import CreateTaskModal from "../Modals/CreateTaskModal";
import { applyTemplateId, getActionTitleById } from "@/lib/helpers";
import { generateCUID } from "@/lib/generateCUID";

const CreateTemplateCard: FC = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(DemoContext);
  const [templateName, setTemplateName] = useState<string>("");
  const [templateDescription, setTemplateDescription] = useState<string>("");
  const [templateTasks, setTemplateTasks] = useState<Task[]>([]);

  // Dispatch Multiple tasks to central state
  const dispatchTasks = (tasks: Task[]) => {
    tasks.forEach((task) => {
      dispatch({ type: "ADD_TASK", payload: task });
    });
  };

  // Allows nested form to add tasks to local state
  const addTemplateTasks = (task: Task) => {
    setTemplateTasks([...templateTasks, task]);
  };

  const handleSubmit = () => {
    const newTemplate: Template = {
      templateId: generateCUID(),
      name: templateName,
      description: templateDescription,
    };

    applyTemplateId(newTemplate.templateId, templateTasks);

    if (templateName.trim() !== "") {
      dispatch({ type: "ADD_TEMPLATE", payload: newTemplate });
      dispatchTasks(templateTasks);
      router.push("/demo/templates");
    }
  };

  return (
    <div className="flex flex-col gap-y-14 font-spaceMono bg-white p-4 rounded-md border shadow">
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
            className="border rounded-md px-3 py-2 w-96 focus:outline-mainColor"
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

        <CreateTaskModal addTemplateTasks={addTemplateTasks} />
        {templateTasks.map((task) => (
          <div key={task.taskId}>
            {getActionTitleById(task.actionId, state.actions)} -{" "}
            {task.startTime} - {task.endTime} - Notes: {task.notes} - tempId:{" "}
            {task.templateId}
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-end gap-x-2">
        <button
          onClick={() => router.push("/demo/templates")}
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
          Create
        </button>
      </div>
    </div>
  );
};
export default CreateTemplateCard;