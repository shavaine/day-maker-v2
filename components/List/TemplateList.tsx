"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { FC, useContext } from "react";
import TemplateCard from "../Cards/TemplateCard";
import { usePathname } from "next/navigation";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";

// Imported In demo/actions & dashboard/actions Route
const TemplateList: FC = () => {
  const pathname = usePathname();
  const { state } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {state.templates.map((template) => (
        <TemplateCard
          key={template.id}
          id={template.id}
          name={template.name}
          description={template.description}
        />
      ))}
    </div>
  );
};

export default TemplateList;
