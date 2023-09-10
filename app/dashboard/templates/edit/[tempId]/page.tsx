import TemplateEditPage from "@/components/Layouts/TemplateEditPage";
import { FC } from "react";

interface Props {
  params: { tempId: string };
}

const TemplateEdit: FC<Props> = ({ params }) => {
  return <TemplateEditPage tempId={params.tempId} />;
};
export default TemplateEdit;
