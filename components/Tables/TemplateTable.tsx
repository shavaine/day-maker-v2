import { DemoContext } from "@/context/DemoContext/DemoContext";
import { FC, useContext } from "react";
import TaskTableRow from "./TaskTableRow";

interface Props {
  tempId: string | undefined;
}
const TemplateTable: FC<Props> = ({ tempId }) => {
  const { state } = useContext(DemoContext);
  return (
    <table className="border">
      <tbody>
        <tr className="bg-gray-200 font-workSans font-normal">
          <th className="w-[15%] p-4 text-start font-normal">Start Time</th>
          <th className="w-[15%] p-4 text-start font-normal">End Time</th>
          <th className="w-[55%] p-4 text-start font-normal">Action</th>
          <th className="w-[15%] p-4 font-normal">Notes</th>
        </tr>
        {tempId &&
          state.tasks
            .filter((task) => task.templateId === tempId)
            .sort((a, b) => a.startTime - b.startTime)
            .map((task, index) => (
              <TaskTableRow key={task.taskId} task={task} index={index} />
            ))}
      </tbody>
    </table>
  );
};
export default TemplateTable;
