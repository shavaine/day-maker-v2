"use client";

import MobileTaskCard from "@/components/Cards/MobileTaskCard";
import MobileTaskList from "@/components/List/MobileTaskList";
import TemplateTable from "@/components/Tables/TemplateTable";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { getTemplateNameById } from "@/lib/helpers";
import { usePathname } from "next/navigation";
import { FC, useContext } from "react";

interface Props {
  params: { tempId: string };
}

const TemplateView: FC<Props> = ({ params }) => {
  const pathname = usePathname();
  const { state } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );

  return (
    <div className="flex flex-col gap-y-3 bg-white p-3 lg:p-10 rounded-md border shadow">
      <h1 className=" text-secondaryColor font-workSans font-bold text-3xl text-center md:text-start">
        {getTemplateNameById(params.tempId, state.templates)}
      </h1>
      <TemplateTable tempId={params.tempId} />
      <MobileTaskList
        tempId={params.tempId}
        tasks={state.tasks}
        actions={state.actions}
      />
    </div>
  );
};
export default TemplateView;
