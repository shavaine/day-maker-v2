"use client";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Task } from "@/context/Interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useContext, useState } from "react";

interface Props {
  id: string;
  name: string;
  description: string;
}

const TemplateCard: FC<Props> = ({ id, name, description }) => {
  const pathname = usePathname();
  const { state, dispatch } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const [loading, setLoading] = useState(false);

  // Remove tasks and schedules assiociated with template from local state
  // No need to do this on DB level, as task will be deleted through cascade delete
  const deleteAssociatedData = (templateId: string) => {
    const currentTasks = state.tasks.filter(
      (task) => task.templateId === templateId
    );
    const currentSchedules = state.schedules.filter(
      (schedule) => schedule.templateId === templateId
    );
    currentTasks.forEach((task) =>
      dispatch({ type: "DELETE_TASK", payload: task.id })
    );
    currentSchedules.forEach((schedule) =>
      dispatch({ type: "DELETE_SCHEDULE", payload: schedule.id })
    );
  };
  const deleteTemplate = async (templateId: string) => {
    if (pathname.includes("demo")) {
      dispatch({ type: "DELETE_TEMPLATE", payload: templateId });
      deleteAssociatedData(templateId);
    }

    if (pathname.includes("dashboard")) {
      setLoading(true);
      try {
        const res = await fetch(`/api/templates/delete/${templateId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        // Add Toast Message For Successful Call
        if (res.ok) {
          dispatch({ type: "DELETE_TEMPLATE", payload: templateId });
          deleteAssociatedData(templateId);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-between bg-white border shadow grow h-60 pt-3 break-all overflow-auto font-spaceMon rounded-md">
      <div>
        <p className="text-center font-workSans font-bold text-mainColor text-3xl mb-2">
          {name}
        </p>
        <p className="font-spaceMono px-3">
          <span className="font-bold">Description:</span>
          <br />
          {description}
        </p>
      </div>

      <div className="flex flex-row w-full">
        <Link className="w-1/3 grow" href={`templates/view/${id}`}>
          <button className="bg-purple-500 text-mainColor font-workSans font-bold w-full hover:opacity-80 p-2">
            View
          </button>
        </Link>

        <Link className="w-1/3 grow" href={`templates/edit/${id}`}>
          <button className="bg-purple-300 text-mainColor font-workSans font-bold w-full hover:opacity-80 p-2">
            Edit
          </button>
        </Link>

        <button
          className="bg-red-200 text-mainColor font-workSans font-bold w-1/3 grow hover:opacity-80 p-2"
          onClick={() => deleteTemplate(id)}
          disabled={loading}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
