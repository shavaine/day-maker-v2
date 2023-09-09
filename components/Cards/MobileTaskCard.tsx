"use client";
import { Action, Task } from "@/context/Interfaces";
import { formatTime, formatTimeType, getActionTitleById } from "@/lib/helpers";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

interface Props {
  task: Task;
  actions: Action[];
}

const MobileTaskCard = ({ task, actions }: Props) => {
  const [toggleNotes, setToggleNotes] = useState(false);
  return (
    <div className="border p-2 rounded-md flex flex-col text-sm" key={task.id}>
      <div className="flex flex-col">
        <div className="flex">
          <span className="font-bold mr-1">Time:</span>
          {formatTimeType(formatTime(task.startTime))} -
          {formatTimeType(formatTime(task.endTime))}
          <FaAngleUp
            onClick={() => {
              setToggleNotes((prev) => !prev);
            }}
            className={`ml-auto text-xl ${toggleNotes && "rotate-180"}`}
          />
        </div>
        <div className="flex">
          <span className="font-bold mr-1">Action:</span>
          {getActionTitleById(task.actionId, actions)}
        </div>
      </div>
      {toggleNotes && (
        <div className="flex flex-col">
          <p className="font-bold">Notes:</p>
          <p>{task.notes}</p>
        </div>
      )}
    </div>
  );
};
export default MobileTaskCard;
