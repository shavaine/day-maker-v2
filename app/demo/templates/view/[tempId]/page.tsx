"use client";

import { DemoContext } from "@/context/DemoContext/DemoContext";
import { getTemplateNameById } from "@/lib/helpers";
import { useContext } from "react";

interface Props {
  params: { tempId: string };
}

const TemplateView = ({ params }: Props) => {
  const { state } = useContext(DemoContext);

  return (
    <div className="flex flex-col bg-white p-4 rounded-md border shadow">
      <h1 className=" text-secondaryColor font-workSans font-bold text-4xl text-center">
        {getTemplateNameById(params.tempId, state.templates)}
      </h1>
    </div>
  );
};
export default TemplateView;
