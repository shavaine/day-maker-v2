import { BiSolidAddToQueue } from "react-icons/bi";
import TemplateList from "../List/TemplateList";
import Link from "next/link";
import { FC } from "react";

const TemplatePage: FC = () => {
  return (
    <>
      <Link
        className="self-center sm:hidden fixed bottom-20 right-1 z-50 bg-white rounded-full p-2 border"
        href="templates/create"
      >
        <BiSolidAddToQueue className="sm:hidden text-3xl text-mainColor" />
      </Link>

      <header className="flex flex-row justify-center sm:justify-between">
        <h1 className="pageTitle">Templates</h1>
        <Link className="hidden sm:inline" href={`templates/create`}>
          <h4 className="text-lg text-gray-500 self-center hover:font-bold mt-5">
            Create Template
          </h4>
        </Link>
      </header>
      <TemplateList />
    </>
  );
};
export default TemplatePage;
