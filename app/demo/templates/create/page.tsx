import BackButton from "@/components/Buttons/BackButton";
import CreateTemplateCard from "@/components/Cards/CreateTemplateCard";

export default function Templates() {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="flex flex-row justify-between ">
        <h1 className=" pageTitle">Create Template</h1>
        <BackButton />
      </div>
      <CreateTemplateCard />
    </div>
  );
}
