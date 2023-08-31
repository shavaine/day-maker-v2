import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Task } from "@/context/Interfaces";
import { formatTime, formatTimeType, getActionTitleById } from "@/lib/helpers";
import { usePathname } from "next/navigation";
import { FC, useContext, useState } from "react";

interface Props {
  task: Task;
  index: number;
}

const TaskTableRow: FC<Props> = ({ task, index }) => {
  const pathname = usePathname();
  const { state } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const [toggleNotes, setToggleNotes] = useState(false);
  return (
    <>
      <tr className={`${index % 2 === 0 ? "my-3" : "bg-gray-100"}`}>
        <td className="p-4 font-bold font-spaceMono">
          {formatTimeType(formatTime(task.startTime))}
        </td>
        <td className="p-4 font-bold font-spaceMono">
          {formatTimeType(formatTime(task.endTime))}
        </td>
        <td className="p-4 font-spaceMono">
          {getActionTitleById(task.actionId, state.actions)}
        </td>
        <td className="p-4">
          <button
            onClick={() => {
              setToggleNotes((prev) => !prev);
            }}
            className={` bg-mainColor rounded-md hover:bg-secondaryColor text-white p-2 w-full max-w-xs ${
              toggleNotes && "bg-secondaryColor font-bold"
            }`}
          >
            View
          </button>
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
