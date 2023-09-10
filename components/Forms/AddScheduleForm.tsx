"use client";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Schedule } from "@/context/Interfaces";
import { generateCUID } from "@/lib/generateCUID";
import { formatStringToDate } from "@/lib/helpers";
import { usePathname } from "next/navigation";
import { FC, FormEvent, useContext, useState } from "react";

interface Props {
  toggleModal: () => void;
  scheduleDate: Date;
}

export const AddScheduleForm: FC<Props> = ({ toggleModal, scheduleDate }) => {
  const pathname = usePathname();
  const { state, dispatch } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const [loading, setLoading] = useState(false);
  const [templateID, setTemplateID] = useState<string>(state.templates[0].id);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pathname.includes("demo")) {
      const newSchedule: Schedule = {
        id: generateCUID(),
        date: scheduleDate,
        templateId: templateID,
        userId: "1234",
      };
      dispatch({ type: "ADD_SCHEDULE", payload: newSchedule });
      toggleModal();
    }

    if (pathname.includes("dashboard")) {
      e.preventDefault();
      setLoading(true);
      const body = {
        date: scheduleDate,
        templateId: templateID,
      };
      try {
        const res = await fetch("/api/schedules/create", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const newSchedule = await res.json();
        // Date returned as string, parsed back into Date Type
        newSchedule.date = new Date(newSchedule.date);
        if (res.ok) {
          dispatch({ type: "ADD_SCHEDULE", payload: newSchedule });
        }
        toggleModal();
        setLoading(false);
      } catch (error) {
        console.log(error);
        // Add Toast explaining to user what went wrong.
      }
    }
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
          disabled={loading}
        >
          Change
        </button>
      </div>
    </form>
  );
};
