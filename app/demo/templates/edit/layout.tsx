import BackButton from "@/components/Buttons/BackButton";
import { getTemplateNameById } from "@/lib/helpers";

interface Props {
  children: React.ReactNode;
}
export default function EditTemplateLayout({ children }: Props) {
  return (
    <>
      <header className="flex flex-row justify-between ">
        <h1 className="pageTitle">Edit Template</h1>
        <BackButton />
      </header>
      {children}
    </>
  );
}
