import BackButton from "../Buttons/BackButton";
import CreateTemplateCard from "../Cards/CreateTemplateCard";
import { FC } from "react";

const TemplateCreatePage: FC = () => {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="flex flex-row justify-between ">
        <h1 className=" pageTitle">Create Template</h1>
        <BackButton />
      </div>
      <CreateTemplateCard />
    </div>
  );
};
export default TemplateCreatePage;
