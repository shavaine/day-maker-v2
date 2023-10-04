"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Task, Template } from "@/context/Interfaces";
import { usePathname, useRouter } from "next/navigation";
import { FC, useContext, useState } from "react";
import CreateTaskModal from "../Modals/CreateTaskModal";
import {
  applyTemplateId,
  createTasks,
  showErrorToast,
  showSuccessToast,
} from "@/lib/helpers";
import TaskCard from "./TaskCard";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { editTemplateClientValidate } from "@/lib/Validation/formValidation";
import { VscLoading } from "react-icons/vsc";

interface Props {
  name: string;
  description: string;
  tasks: Task[];
  tempId: string;
}
const EditTemplateCard: FC<Props> = ({ name, description, tasks, tempId }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { state, dispatch } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const [templateName, setTemplateName] = useState<string>(name);
  const [templateDescription, setTemplateDescription] =
    useState<string>(description);
  const [templateTasks, setTemplateTasks] = useState<Task[]>(tasks);
  const [newTasks, setNewTasks] = useState<Task[]>([]);
  const [deletedTasks, setDeletedTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

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
  const removeDeletedTasks = async (tasks: Task[]) => {
    if (pathname.includes("demo")) {
      tasks.forEach((task) => {
        if (task.templateId === tempId && !templateTasks.includes(task)) {
          dispatch({ type: "DELETE_TASK", payload: task.id });
        }
      });
    }
    if (pathname.includes("dashboard")) {
      tasks.forEach((task) => {
        try {
          fetch(`/api/tasks/delete/${task.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (error) {
          console.log(error);
        }
        dispatch({ type: "DELETE_TASK", payload: task.id });
      });
    }
  };
  // Allows nested form to add tasks to local state
  const addTemplateTask = (task: Task) => {
    setNewTasks([...newTasks, task]);
  };

  const deleteTemplateTask = (toDeleteTask: Task) => {
    const newTemplateTasks = templateTasks.filter(
      (task) => task.id !== toDeleteTask.id
    );
    setTemplateTasks([...newTemplateTasks]);
    setDeletedTasks([...deletedTasks, toDeleteTask]);
  };

  const deleteNewTask = (toDeleteTask: Task) => {
    const newTemplateTasks = newTasks.filter(
      (task) => task.id !== toDeleteTask.id
    );
    setNewTasks([...newTemplateTasks]);
    setDeletedTasks([...deletedTasks, toDeleteTask]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const input = editTemplateClientValidate(
      templateName,
      templateDescription,
      state.templates
    );

    if (input.notValid) {
      showErrorToast({ message: input.message, dispatch, setLoading });
    } else {
      if (pathname.includes("demo")) {
        const currentTemplate: Template = {
          id: tempId,
          name: templateName,
          description: templateDescription,
          userId: "1234",
        };

        applyTemplateId(currentTemplate.id, newTasks);

        dispatch({ type: "UPDATE_TEMPLATE", payload: currentTemplate });
        dispatchTasks(newTasks);
        removeDeletedTasks(state.tasks);
        router.push("/demo/templates");
        showSuccessToast({
          message: `Template ${currentTemplate.name} was successfully updated`,
          dispatch,
        });
      }

      if (pathname.includes("dashboard")) {
        setLoading(true);
        const body = {
          id: tempId,
          name: templateName,
          description: templateDescription,
        };
        try {
          const res = await fetch("/api/templates/edit", {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const editTemplate = await res.json();

          if (res.ok) {
            dispatch({ type: "UPDATE_TEMPLATE", payload: editTemplate });
            applyTemplateId(editTemplate.id, newTasks);
            try {
              const finalTasks = await createTasks(newTasks);
              // Adds Newly created task to local state
              dispatchTasks(finalTasks);
            } catch (error) {
              console.log(error);
              showErrorToast({
                message: "Unable to Edit Task",
                dispatch,
                setLoading,
              });
            }

            // Deletes deleted task from the Database and Local State
            removeDeletedTasks(deletedTasks);
            setLoading(false);
            router.back();
            showSuccessToast({
              message: `Template ${editTemplate.name} was successfully updated`,
              dispatch,
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
    <>
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
        {newTasks
          .sort((a, b) => a.startTime - b.startTime)
          .map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              actions={state.actions}
              removeTask={deleteNewTask}
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
          Change
          {loading && (
            <VscLoading className="animate-spin self-center ml-1"></VscLoading>
          )}
        </button>
      </footer>
    </>
  );
};
export default EditTemplateCard;
