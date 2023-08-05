"use client";
import { Action, Task } from "@/context/Interfaces";
import { formatTime, formatTimeType, getActionTitleById } from "@/lib/helpers";
import { useState } from "react";
import { FaAngleUp, FaMinusCircle } from "react-icons/fa";

interface Props {
  task: Task;
  actions: Action[];
  removeTask: (toDeleteTask: Task) => void;
}

const TaskCard = ({ task, actions, removeTask }: Props) => {
  const [toggleNotes, setToggleNotes] = useState(false);

  return (
    <div className="border p-2 rounded-md flex flex-col" key={task.taskId}>
      <div className="flex flex-row flex-wrap">
        <FaMinusCircle
          className="text-xl text-red-400 mr-4"
          onClick={() => removeTask(task)}
        />
        <span className="font-bold mr-1">Start Time:</span>{" "}
        {formatTimeType(formatTime(task.startTime))}
        <span className="font-bold ml-6 mr-1">End Time:</span>{" "}
        {formatTimeType(formatTime(task.endTime))}
        <span className="font-bold ml-6 mr-1">Action:</span>
        {getActionTitleById(task.actionId, actions)}
        <FaAngleUp
          onClick={() => {
            setToggleNotes((prev) => !prev);
          }}
          className={`ml-auto text-xl ${toggleNotes && "rotate-180"}`}
        />
      </div>
      {toggleNotes && (
        <div className="flex flex-col mt-2 ml-9">
          <p className="font-bold">Notes:</p>
          <p>{task.notes}</p>
        </div>
      )}
    </div>
  );
};
export default TaskCard;
