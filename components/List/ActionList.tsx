"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { FC, useContext } from "react";
import ActionCard from "../Cards/ActionCard";
import { usePathname } from "next/navigation";

// Imported In demo/actions & dashboard/actions Route
const ActionList: FC = () => {
  const pathname = usePathname();
  const { state } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {state.actions.map((action) => (
        <ActionCard
          key={action.id}
          title={action.title}
          id={action.id}
          userId={action.userId}
        />
      ))}
    </div>
  );
};

export default ActionList;
