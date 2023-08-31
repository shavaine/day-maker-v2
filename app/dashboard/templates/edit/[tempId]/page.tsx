"use client";

import EditTemplateCard from "@/components/Cards/EditTemplateCard";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { getTemplateNameById } from "@/lib/helpers";
import { usePathname } from "next/navigation";
import { FC, useContext } from "react";

interface Props {
  params: { tempId: string };
}

const TemplateEdit: FC<Props> = ({ params }) => {
  const pathname = usePathname();
  const { state } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const currentTemplate = state.templates.find(
    (template) => template.id === params.tempId
  );
  const currentTask = state.tasks.filter(
    (task) => task.templateId === params.tempId
  );
  return (
    <div className="flex flex-col gap-y-5 bg-white p-3 lg:p-10 rounded-md border shadow">
      <h1 className="text-secondaryColor font-workSans font-bold text-3xl">
        {getTemplateNameById(params.tempId, state.templates)}
      </h1>
      <EditTemplateCard
        name={currentTemplate?.name!}
        description={currentTemplate?.description!}
        tasks={currentTask!}
        tempId={params.tempId}
      />
    </div>
  );
};
export default TemplateEdit;
