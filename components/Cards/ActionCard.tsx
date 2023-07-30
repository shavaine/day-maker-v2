"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Action } from "@/context/Interfaces";
import { FC, useContext } from "react";
import EditActionModal from "../Modals/EditActionModal";

interface Props {
  title: string;
  actionId: string;
}

// Imported in ActionList Component
const ActionCard: FC<Action> = ({
  title,
  actionId,
}: Props): React.ReactNode => {
  const { dispatch } = useContext(DemoContext);

  const deleteAction = (actionId: string) => {
    dispatch({ type: "DELETE_ACTION", payload: actionId });
  };

  return (
    <div className="flex flex-col justify-between bg-white border shadow grow h-40 pt-3 break-all overflow-auto font-spaceMon rounded-md">
      <p className="text-center font-workSans font-bold text-mainColor text-lg">
        {title}
      </p>
      <div className="flex flex-row w-full">
        <EditActionModal title={title} actionId={actionId} />
        <button
          className="bg-red-200 text-mainColor font-workSans font-bold w-1/2 grow hover:opacity-80 p-2"
          onClick={() => deleteAction(actionId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ActionCard;
