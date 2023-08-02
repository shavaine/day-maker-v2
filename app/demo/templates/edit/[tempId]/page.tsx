"use client";

import EditTemplateCard from "@/components/Cards/EditTemplateCard";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { getTemplateNameById } from "@/lib/helpers";
import { FC, useContext } from "react";

interface Props {
  params: { tempId: string };
}

const TemplateEdit: FC<Props> = ({ params }) => {
  const { state } = useContext(DemoContext);
  const currentTemplate = state.templates.find(
    (template) => template.templateId === params.tempId
  );
  const currentTask = state.tasks.filter(
    (task) => task.templateId === params.tempId
  );
  return (
    <div className="flex flex-col gap-y-5 bg-white p-4 rounded-md border shadow">
      <h1 className=" text-secondaryColor font-workSans font-bold text-4xl text-center">
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
