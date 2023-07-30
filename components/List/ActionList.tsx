"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { FC, useContext } from "react";
import ActionCard from "../Cards/ActionCard";

// Imported In demo/actions & dashboard/actions Route
const ActionList: FC = () => {
  const { state } = useContext(DemoContext);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {state.actions.map((action) => (
        <ActionCard
          key={action.actionId}
          title={action.title}
          actionId={action.actionId}
        />
      ))}
    </div>
  );
};

export default ActionList;
