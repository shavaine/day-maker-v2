import BackButton from "@/components/Buttons/BackButton";
import { getTemplateNameById } from "@/lib/helpers";

interface Props {
  children: React.ReactNode;
}
export default function EditTemplateLayout({ children }: Props) {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="p-10 flex flex-row justify-between ">
        <h1 className=" text-secondaryColor font-workSans font-bold text-4xl">
          Edit Template
        </h1>
        <BackButton />
      </div>
      <div className="p-10">{children}</div>
    </div>
  );
}
