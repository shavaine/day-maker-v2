"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { FC, useContext } from "react";
import ActionCard from "../Cards/ActionCard";

// Imported In demo/actions & dashboard/actions Route
const ActionList: FC = () => {
  const { state } = useContext(DemoContext);

  return (
    <div className="container p-0 py-10 flex flex-row flex-wrap gap-4">
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
