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
        <tr className="bg-gray-100">
          <th>Start Time</th>
          <th>End Time</th>
          <th>Action</th>
          <th>Notes</th>
        </tr>
        {tempId ? (
          state.tasks
            .filter((task) => task.templateId === tempId)
            .map((task, index) => (
              <TaskTableRow key={task.taskId} task={task} index={index} />
            ))
        ) : (
          <tr>
            <td className="text-center" colSpan={4}>
              No template exist...
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default TemplateTable;
