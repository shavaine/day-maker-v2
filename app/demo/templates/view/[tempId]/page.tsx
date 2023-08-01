"use client";

import TemplateTable from "@/components/Tables/TemplateTable";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { getTemplateNameById } from "@/lib/helpers";
import { FC, useContext } from "react";

interface Props {
  params: { tempId: string };
}

const TemplateView: FC<Props> = ({ params }) => {
  const { state } = useContext(DemoContext);

  return (
    <div className="flex flex-col gap-y-5 bg-white p-4 rounded-md border shadow">
      <h1 className=" text-secondaryColor font-workSans font-bold text-4xl text-center">
        {getTemplateNameById(params.tempId, state.templates)}
      </h1>
      <TemplateTable tempId={params.tempId} />
    </div>
  );
};
export default TemplateView;
