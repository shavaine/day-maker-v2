import BackButton from "@/components/Buttons/BackButton";
import CreateTemplateCard from "@/components/Cards/CreateTemplateCard";

export default function Templates() {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="p-10 flex flex-row justify-between ">
        <h1 className=" text-secondaryColor font-workSans font-bold text-4xl">
          Create Template
        </h1>
        <BackButton />
      </div>
      <div className="p-10">
        <CreateTemplateCard />
      </div>
    </div>
  );
}
