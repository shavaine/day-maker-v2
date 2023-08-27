"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Schedule } from "@/context/Interfaces";
import { generateCUID } from "@/lib/generateCUID";
import { FC, FormEvent, useContext, useState } from "react";

interface Props {
  toggleModal: () => void;
  scheduleDate: Date;
}

export const AddScheduleForm: FC<Props> = ({ toggleModal, scheduleDate }) => {
  const { state, dispatch } = useContext(DemoContext);
  const [templateID, setTemplateID] = useState<string>(
    state.templates[0].templateId
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSchedule: Schedule = {
      scheduleId: generateCUID(),
      date: scheduleDate,
      templateId: templateID,
    };

    dispatch({ type: "ADD_SCHEDULE", payload: newSchedule });
    toggleModal();
  };

  return (
    <form
      className="flex flex-col gap-y-14 font-spaceMono"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="action">Templates</label>
        <select
          className="border"
          id="template"
          name="template"
          value={templateID}
          onChange={(e) => setTemplateID(e.target.value)}
        >
          {state.templates.map((template) => (
            <option key={template.templateId} value={template.templateId}>
              {template.name}
            </option>
          ))}
        </select>
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
          Change
        </button>
      </div>
    </form>
  );
};