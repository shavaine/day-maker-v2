"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Action } from "@/context/Interfaces";
import { FC, useContext, useState } from "react";
import EditActionModal from "../Modals/EditActionModal";
import { usePathname } from "next/navigation";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";

interface Props {
  title: string;
  id: string;
}

// Imported in ActionList Component
const ActionCard: FC<Action> = ({ title, id }: Props): React.ReactNode => {
  const pathname = usePathname();
  const { dispatch } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );

  const [loading, setLoading] = useState(false);

  const deleteAction = async (actionId: string) => {
    if (pathname.includes("demo")) {
      dispatch({ type: "DELETE_ACTION", payload: actionId });
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
        // Add Toast Message For Successful Call
        console.log(await res.json());
        if (res.ok) {
          dispatch({ type: "DELETE_ACTION", payload: actionId });
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
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
          className="bg-red-200 text-mainColor font-workSans font-bold w-1/2 grow hover:opacity-80 p-2"
          onClick={() => deleteAction(id)}
          disabled={loading}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ActionCard;
