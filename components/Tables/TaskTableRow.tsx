import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Task } from "@/context/Interfaces";
import { getActionTitleById } from "@/lib/helpers";
import { FC, useContext, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

interface Props {
  task: Task;
  index: number;
}

const TaskTableRow: FC<Props> = ({ task, index }) => {
  const { state } = useContext(DemoContext);
  const [toggleNotes, setToggleNotes] = useState(false);
  return (
    <>
      <tr
        className={`${
          index % 2 === 0 ? "text-center" : "bg-gray-100 text-center"
        }`}
      >
        <td>{task.startTime}</td>
        <td>{task.endTime}</td>
        <td>{getActionTitleById(task.actionId, state.actions)}</td>
        <td>
          {" "}
          <FaAngleUp
            onClick={() => {
              setToggleNotes((prev) => !prev);
            }}
            className={`mx-auto text-xl ${toggleNotes && "rotate-180"}`}
          />
        </td>
      </tr>
      {toggleNotes && (
        <tr className="text-center">
          <td colSpan={4}>{task.notes}</td>
        </tr>
      )}
    </>
  );
};
export default TaskTableRow;
