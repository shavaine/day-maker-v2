"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Action } from "@/context/Interfaces";
import { FC, useContext, useState } from "react";
import EditActionModal from "../Modals/EditActionModal";
import { usePathname } from "next/navigation";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { VscLoading } from "react-icons/vsc";

interface Props {
  title: string;
  id: string;
}

// Imported in ActionList Component
const ActionCard: FC<Action> = ({ title, id }: Props): React.ReactNode => {
  const pathname = usePathname();

  const { state, dispatch } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const [loading, setLoading] = useState(false);

  const deleteAction = async (actionId: string) => {
    if (pathname.includes("demo")) {
      dispatch({ type: "DELETE_ACTION", payload: actionId });
      dispatch({
        type: "SHOW_TOAST",
        payload: {
          message: `Action ${title} successfully deleted`,
          type: "success",
        },
      });
      state.tasks.forEach((task) => {
        if (task.actionId === actionId) {
          dispatch({ type: "DELETE_TASK", payload: task.id });
        }
      });
    }

    if (pathname.includes("dashboard")) {
      setLoading(true);
      try {
        const res = await fetch(`/api/actions/delete/${actionId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          dispatch({ type: "DELETE_ACTION", payload: actionId });
          dispatch({
            type: "SHOW_TOAST",
            payload: {
              message: `Action ${title} successfully deleted`,
              type: "success",
            },
          });
          // locally delete related task for action. (tasks will cascade delete on server)
          state.tasks.forEach((task) => {
            if (task.actionId === actionId) {
              dispatch({ type: "DELETE_TASK", payload: task.id });
            }
          });
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Something went wrong, please try again later`,
            type: "error",
          },
        });
      }
    }
  };

  return (
    <div className="flex flex-col justify-between bg-white border shadow grow break-all overflow-auto font-spaceMon rounded-md">
      <p className="text-center font-workSans font-bold text-mainColor text-lg p-3">
        {title}
      </p>
      <div className="flex flex-row w-full">
        <EditActionModal title={title} actionId={id} />
        <button
          className="flex justify-center bg-red-200 text-mainColor font-workSans font-bold w-1/2 grow hover:opacity-80 p-2"
          onClick={() => deleteAction(id)}
          disabled={loading}
        >
          Delete
          {loading && (
            <VscLoading className="animate-spin self-center ml-1"></VscLoading>
          )}
        </button>
      </div>
    </div>
  );
};

export default ActionCard;
