import TemplateViewPage from "@/components/Layouts/TemplateViewPage";
import { FC } from "react";

interface Props {
  params: { tempId: string };
}

const TemplateView: FC<Props> = ({ params }) => {
  return <TemplateViewPage tempId={params.tempId} />;
};
export default TemplateView;
