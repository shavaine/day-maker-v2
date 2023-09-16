"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Task } from "@/context/Interfaces";
import { generateCUID } from "@/lib/generateCUID";
import { FC, FormEvent, useContext, useState } from "react";
import TimePicker from "../TimePicker";
import { usePathname } from "next/navigation";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { taskClientValidate } from "@/lib/Validation/formValidation";
import { showErrorToast } from "@/lib/helpers";
import { VscLoading } from "react-icons/vsc";

interface Props {
  toggleModal: () => void;
  addTemplateTasks: (task: Task) => void;
}

const CreateTaskForm: FC<Props> = ({ toggleModal, addTemplateTasks }) => {
  const pathname = usePathname();
  const { state, dispatch } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const [loading, setLoading] = useState(false);
  const [actionId, setActionId] = useState<string>("default");
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [notes, setNotes] = useState<string>("");

  const handleStartTimeChange = (newTime: number) => {
    setStartTime(newTime);
  };

  const handleEndtTimeChange = (newTime: number) => {
    setEndTime(newTime);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const newTask: Task = {
      id: generateCUID(),
      templateId: `temporaryID-${generateCUID()}`,
      actionId: actionId,
      startTime: startTime,
      endTime: endTime,
      notes: notes,
    };

    const input = taskClientValidate(newTask);

    if (input.notValid) {
      showErrorToast({ message: input.message, dispatch, setLoading });
    } else {
      if (actionId !== "") {
        addTemplateTasks(newTask);
        toggleModal();
      }
    }
  };

  return (
    <form
      className="flex flex-col gap-y-14 font-spaceMono"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-y-4 text-sm sm:text-base">
        <div className="flex flex-col">
          <label htmlFor="action">Action</label>
          <select
            className="border"
            id="action"
            name="action"
            value={actionId}
            onChange={(e) => setActionId(e.target.value)}
          >
            <option value="default">Select an action</option>
            {state.actions.map((action) => (
              <option key={action.id} value={action.id}>
                {action.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-row gap-x-4">
          <div className="grow">
            <label htmlFor="startTime">Start Time</label>
            <TimePicker
              selectedTime={startTime}
              onTimeChange={handleStartTimeChange}
              id="startTime"
            />
          </div>
          <div className="grow">
            <label htmlFor="endTime">End Time</label>
            <TimePicker
              selectedTime={endTime}
              onTimeChange={handleEndtTimeChange}
              id="endTime"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="notes">Notes</label>
          <textarea
            className="border px-3 py-2"
            rows={3}
            value={notes}
            id="notes"
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
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
          className="flex justify-center border w-24 rounded-lg bg-mainColor p-1 text-white hover:font-bold hover:opacity-80"
          type="submit"
          disabled={loading}
        >
          Create
          {loading && (
            <VscLoading className="animate-spin self-center ml-1"></VscLoading>
          )}
        </button>
      </div>
    </form>
  );
};

export default CreateTaskForm;
