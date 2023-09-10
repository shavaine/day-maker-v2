"use client";
import { usePathname } from "next/navigation";
import EditTemplateCard from "../Cards/EditTemplateCard";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { FC, useContext } from "react";
import { getTemplateNameById } from "@/lib/helpers";

interface Props {
  tempId: string;
}

const TemplateEditPage: FC<Props> = ({ tempId }) => {
  const pathname = usePathname();
  const { state } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const currentTemplate = state.templates.find(
    (template) => template.id === tempId
  );
  const currentTask = state.tasks.filter((task) => task.templateId === tempId);
  return (
    <div className="flex flex-col gap-y-5 bg-white p-3 lg:p-10 rounded-md border shadow">
      <h1 className="text-secondaryColor font-workSans font-bold text-3xl">
        {getTemplateNameById(tempId, state.templates)}
      </h1>
      <EditTemplateCard
        name={currentTemplate?.name!}
        description={currentTemplate?.description!}
        tasks={currentTask!}
        tempId={tempId}
      />
    </div>
  );
};
export default TemplateEditPage;
