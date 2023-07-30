import TemplateList from "@/components/List/TemplateList";

export default function Templates() {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="p-10 flex flex-row justify-between ">
        <h1 className=" text-secondaryColor font-workSans font-bold text-4xl">
          Templates
        </h1>
      </div>
      <TemplateList />
    </div>
  );
}
