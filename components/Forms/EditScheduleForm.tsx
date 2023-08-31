"use client";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Schedule } from "@/context/Interfaces";
import { usePathname } from "next/navigation";
import { FC, FormEvent, useContext, useState } from "react";

interface Props {
  toggleModal: () => void;
  currentScheduleId: string;
  currentDate: Date;
  tempID: string;
}

export const EditScheduleForm: FC<Props> = ({
  toggleModal,
  currentScheduleId,
  currentDate,
  tempID,
}) => {
  const pathname = usePathname();
  const { state, dispatch } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const [templateID, setTemplateID] = useState<string>(tempID);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updateSchedule: Schedule = {
      id: currentScheduleId,
      date: currentDate,
      templateId: templateID,
      userId: "1",
    };

    dispatch({ type: "UPDATE_SCHEDULE", payload: updateSchedule });
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
            <option key={template.id} value={template.id}>
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
