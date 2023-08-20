import TemplateList from "@/components/List/TemplateList";
import Link from "next/link";

export default function Templates() {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="flex flex-row justify-between ">
        <h1 className=" pageTitle">Templates</h1>
        <Link className="self-center" href="/demo/templates/create">
          <h4 className="text-lg text-gray-500">Create Template</h4>
        </Link>
      </div>
      <TemplateList />
    </div>
  );
}
