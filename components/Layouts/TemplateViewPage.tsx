"use client";
import { usePathname } from "next/navigation";
import MobileTaskList from "../List/MobileTaskList";
import TemplateTable from "../Tables/TemplateTable";
import { FC, useContext } from "react";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { getTemplateNameById } from "@/lib/helpers";

interface Props {
  tempId: string;
}

const TemplateViewPage: FC<Props> = ({ tempId }) => {
  const pathname = usePathname();
  const { state } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );

  return (
    <article className="flex flex-col gap-y-3 bg-white p-3 lg:p-10 rounded-md border shadow">
      <h1 className=" text-secondaryColor font-workSans font-bold text-3xl text-center md:text-start">
        {getTemplateNameById(tempId, state.templates)}
      </h1>
      <TemplateTable tempId={tempId} />
      <MobileTaskList
        tempId={tempId}
        tasks={state.tasks}
        actions={state.actions}
      />
    </article>
  );
};
export default TemplateViewPage;
