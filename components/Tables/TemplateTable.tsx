import { DemoContext } from "@/context/DemoContext/DemoContext";
import { FC, useContext } from "react";
import TaskTableRow from "./TaskTableRow";

interface Props {
  tempId: string;
}
const TemplateTable: FC<Props> = ({ tempId }) => {
  const { state } = useContext(DemoContext);
  return (
    <table>
      <tbody>
        <tr className="bg-gray-100">
          <th>Start Time</th>
          <th>End Time</th>
          <th>Action</th>
          <th>Notes</th>
        </tr>
        {state.tasks
          .filter((task) => task.templateId === tempId)
          .map((task, index) => (
            <TaskTableRow key={task.taskId} task={task} index={index} />
          ))}
      </tbody>
    </table>
  );
};
export default TemplateTable;
