import BackButton from "../Buttons/BackButton";
import CreateTemplateCard from "../Cards/CreateTemplateCard";

const TemplateCreatePage = () => {
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
