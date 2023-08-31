"use client";

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
    <div className="flex flex-col gap-y-5 bg-white p-3 lg:p-10 rounded-md border shadow">
      <h1 className=" text-secondaryColor font-workSans font-bold text-3xl">
        {getTemplateNameById(params.tempId, state.templates)}
      </h1>
      <TemplateTable tempId={params.tempId} />
    </div>
  );
};
export default TemplateView;
