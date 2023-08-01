"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Task } from "@/context/Interfaces";
import { generateCUID } from "@/lib/generateCUID";
import { FC, FormEvent, useContext, useState } from "react";

interface Props {
  toggleModal: () => void;
  addTemplateTasks: (task: Task) => void;
}

export const CreateTaskForm: FC<Props> = ({
  toggleModal,
  addTemplateTasks,
}) => {
  const { state } = useContext(DemoContext);
  const [actionId, setActionId] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask: Task = {
      taskId: generateCUID(),
      templateId: `temporaryID-${generateCUID()}`,
      actionId: actionId,
      startTime: startTime,
      endTime: endTime,
      notes: notes,
    };

    if (actionId !== "") {
      addTemplateTasks(newTask);
      toggleModal();
    }
  };

  return (
    <form
      className="flex flex-col gap-y-14 font-spaceMono"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="action">Action</label>
        <select
          className="border"
          id="action"
          name="action"
          value={actionId}
          onChange={(e) => setActionId(e.target.value)}
        >
          <option value="">Select an action</option>
          {state.actions.map((action) => (
            <option key={action.actionId} value={action.actionId}>
              {action.title}
            </option>
          ))}
        </select>
        <div className="flex flex-row">
          <div className="grow">
            <label htmlFor="startTime">Start Time</label>
            <input
              className="border"
              type="text"
              value={startTime}
              id="startTime"
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="grow">
            <label htmlFor="endTime">End Time</label>
            <input
              className="border"
              type="text"
              value={endTime}
              id="endTime"
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
        <label htmlFor="notes">Notes</label>
        <textarea
          className="border px-3 py-2"
          rows={3}
          value={notes}
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className="flex flex-row justify-end gap-x-2">
        <button
          onClick={toggleModal}
          className="border w-24 rounded-lg p-1 hover:font-bold"
          type="button"
        >
          Cancel
        </button>
        <button
          className="border w-24 rounded-lg bg-mainColor p-1 text-white hover:font-bold hover:opacity-80"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
};
