import BackButton from "../Buttons/BackButton";
import CreateTemplateCard from "../Cards/CreateTemplateCard";
import { FC } from "react";

const TemplateCreatePage: FC = () => {
  return (
    <>
      <header className="flex flex-row justify-between ">
        <h1 className=" pageTitle">Create Template</h1>
        <BackButton />
      </header>
      <CreateTemplateCard />
    </>
  );
};
export default TemplateCreatePage;
