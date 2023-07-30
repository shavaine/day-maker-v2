"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { FC, useContext } from "react";
import TemplateCard from "../Cards/TemplateCard";

// Imported In demo/actions & dashboard/actions Route
const TemplateList: FC = () => {
  const { state } = useContext(DemoContext);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {state.templates.map((template) => (
        <TemplateCard
          key={template.templateId}
          templateId={template.templateId}
          name={template.name}
          description={template.description}
        />
      ))}
    </div>
  );
};

export default TemplateList;
