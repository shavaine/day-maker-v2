"use client";
import { Action, Task } from "@/context/Interfaces";
import { formatTime, formatTimeType, getActionTitleById } from "@/lib/helpers";
import { FC, useState } from "react";
import { FaAngleUp, FaMinusCircle } from "react-icons/fa";

interface Props {
  task: Task;
  actions: Action[];
  removeTask: (toDeleteTask: Task) => void;
}

const TaskCard: FC<Props> = ({ task, actions, removeTask }) => {
  const [toggleNotes, setToggleNotes] = useState(false);
  return (
    <div className="border p-1 rounded-md flex flex-col text-xs" key={task.id}>
      <div className="flex">
        <FaMinusCircle
          className="text-xl text-red-400 mr-2 self-center"
          onClick={() => removeTask(task)}
        />
        <div className="flex flex-col lg:flex-row flex-wrap grow">
          <div className="flex md:hidden">
            <span className="font-bold mr-1">Time:</span>
            {formatTimeType(formatTime(task.startTime))} -{" "}
            {formatTimeType(formatTime(task.endTime))}
            <FaAngleUp
              onClick={() => {
                setToggleNotes((prev) => !prev);
              }}
              className={`ml-auto text-xl ${toggleNotes && "rotate-180"}`}
            />
          </div>
          <div className="hidden md:flex">
            {" "}
            <span className="font-bold mr-1">Start Time:</span>
            {formatTimeType(formatTime(task.startTime))}
            <span className="font-bold ml-6 mr-1 ">End Time:</span>
            {formatTimeType(formatTime(task.endTime))}
          </div>

          <div className="flex lg:mr-6">
            <span className="font-bold lg:ml-6  mr-1">Action:</span>
            {getActionTitleById(task.actionId, actions)}
          </div>
          {toggleNotes && (
            <div className="hidden md:flex flex-col  mr-1">
              <p className="font-bold">Notes:</p>
              <p>{task.notes}</p>
            </div>
          )}
          <FaAngleUp
            onClick={() => {
              setToggleNotes((prev) => !prev);
            }}
            className={`hidden md:flex ml-auto  text-xl ${
              toggleNotes && "rotate-180"
            }`}
          />
          {toggleNotes && (
            <div className="flex md:hidden flex-col">
              <p className="font-bold">Notes:</p>
              <p>{task.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default TaskCard;
