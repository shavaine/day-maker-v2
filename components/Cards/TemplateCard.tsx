"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Template } from "@/context/Interfaces";
import { FC, useContext } from "react";

interface Props {
  templateId: string;
  name: string;
  description: string;
}

const TemplateCard: FC<Template> = ({
  templateId,
  name,
  description,
}: Props): React.ReactNode => {
  const { dispatch } = useContext(DemoContext);

  const deleteTemplate = (templateId: string) => {
    dispatch({ type: "DELETE_TEMPLATE", payload: templateId });
  };

  return (
    <div className="flex flex-col justify-between bg-white border shadow grow h-60 pt-3 break-all overflow-auto font-spaceMon rounded-md">
      <div>
        <p className="text-center font-workSans font-bold text-mainColor text-3xl mb-2">
          {name}
        </p>
        <p className="font-spaceMono px-3">
          <span className="font-bold">Description:</span>
          <br />
          {description}
        </p>
      </div>

      <div className="flex flex-row w-full">
        <button className="bg-purple-500 text-mainColor font-workSans font-bold w-1/3 grow hover:opacity-80 p-2">
          View
        </button>
        <button className="bg-purple-300 text-mainColor font-workSans font-bold w-1/3 grow hover:opacity-80 p-2">
          Edit
        </button>
        <button
          className="bg-red-200 text-mainColor font-workSans font-bold w-1/3 grow hover:opacity-80 p-2"
          onClick={() => deleteTemplate(templateId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
