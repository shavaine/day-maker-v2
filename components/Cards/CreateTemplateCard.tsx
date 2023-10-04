"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Task, Template } from "@/context/Interfaces";
import { usePathname, useRouter } from "next/navigation";
import { FC, useContext, useState } from "react";
import CreateTaskModal from "../Modals/CreateTaskModal";
import { applyTemplateId, createTasks, showErrorToast } from "@/lib/helpers";
import { generateCUID } from "@/lib/generateCUID";
import TaskCard from "./TaskCard";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { templateClientValidate } from "@/lib/Validation/formValidation";
import { VscLoading } from "react-icons/vsc";

const CreateTemplateCard: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { state, dispatch } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const [templateName, setTemplateName] = useState<string>("");
  const [templateDescription, setTemplateDescription] = useState<string>("");
  const [templateTasks, setTemplateTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  // Dispatch Multiple tasks to central state
  const dispatchTasks = (tasks: Task[]) => {
    tasks.forEach((task) => {
      dispatch({ type: "ADD_TASK", payload: task });
    });
  };

  // Allows nested form to add tasks to local state
  const addTemplateTask = (task: Task) => {
    setTemplateTasks([...templateTasks, task]);
  };

  const deleteTemplateTask = (toDeleteTask: Task) => {
    const newTemplateTasks = templateTasks.filter(
      (task) => task.id !== toDeleteTask.id
    );
    setTemplateTasks([...newTemplateTasks]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const input = templateClientValidate(
      templateName,
      templateDescription,
      state.templates
    );

    if (input.notValid) {
      showErrorToast({ message: input.message, dispatch, setLoading });
    } else {
      if (pathname.includes("demo")) {
        const newTemplate: Template = {
          id: generateCUID(),
          name: templateName,
          description: templateDescription,
          userId: "1234",
        };

        applyTemplateId(newTemplate.id, templateTasks);

        dispatch({ type: "ADD_TEMPLATE", payload: newTemplate });
        dispatchTasks(templateTasks);
        router.back();
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Template ${newTemplate.name} was successfully created`,
            type: "success",
          },
        });
      }

      if (pathname.includes("dashboard")) {
        setLoading(true);
        const body = {
          name: templateName,
          description: templateDescription,
        };
        try {
          const res = await fetch("/api/templates/create", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const newTemplate = await res.json();

          // Update local State
          if (res.ok) {
            dispatch({ type: "ADD_TEMPLATE", payload: newTemplate });
            // Applies newly created template's ID to task in state
            applyTemplateId(newTemplate.id, templateTasks);
            try {
              const finalTasks = await createTasks(templateTasks);
              // Adds Newly created task to local state
              dispatchTasks(finalTasks);
            } catch (error) {
              console.log(error);
              showErrorToast({
                message: "Unable to Create Task",
                dispatch,
                setLoading,
              });
            }
            setLoading(false);
            router.back();
            dispatch({
              type: "SHOW_TOAST",
              payload: {
                message: `Template ${newTemplate.name} was successfully created`,
                type: "success",
              },
            });
          } else if (res.status === 400) {
            const errorData = await res.json();
            const message: string = errorData.error;
            console.log("HTTP 400 Error Data:", errorData);
            showErrorToast({ message: message, dispatch, setLoading });
          }
        } catch (error) {
          console.error("Something went wrong", error);
          dispatch({
            type: "SHOW_TOAST",
            payload: {
              message: `Something went wrong, please try again later`,
              type: "error",
            },
          });
        }
      }
    }
  };

  return (
    <article className="flex flex-col gap-y-14 font-spaceMono bg-white p-3 lg:p-10 rounded-md border shadow">
      <section className="flex flex-col gap-y-4">
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
              key={task.id}
              task={task}
              actions={state.actions}
              removeTask={deleteTemplateTask}
            />
          ))}
      </section>

      <footer className="flex flex-row justify-end gap-x-2">
        <button
          onClick={() => router.back()}
          className="border w-24 rounded-lg p-1 hover:font-bold"
          type="button"
        >
          Cancel
        </button>
        <button
          className="flex justify-center border w-24 rounded-lg bg-mainColor p-1 text-white hover:font-bold hover:opacity-80"
          type="button"
          onClick={() => handleSubmit()}
          disabled={loading}
        >
          Create
          {loading && (
            <VscLoading className="animate-spin self-center ml-1"></VscLoading>
          )}
        </button>
      </footer>
    </article>
  );
};
export default CreateTemplateCard;
