"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Schedule } from "@/context/Interfaces";
import { generateCUID } from "@/lib/generateCUID";
import { useRouter } from "next/navigation";
import { FC, FormEvent, useContext, useState } from "react";
import DatePicker from "../DatePicker";
import { formatDateToString, formatStringToDate } from "@/lib/helpers";

export const CreateScheduleForm: FC = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(DemoContext);
  const [date, setDate] = useState(formatDateToString(new Date(Date.now())));
  const [templateID, setTemplateID] = useState<string>(
    state.templates[0].templateId
  );

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSchedule: Schedule = {
      scheduleId: generateCUID(),
      date: formatStringToDate(date),
      templateId: templateID,
    };

    dispatch({ type: "ADD_SCHEDULE", payload: newSchedule });
    router.back();
  };

  return (
    <form
      className="flex flex-col gap-y-14 font-spaceMono"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="date">Date</label>
        <DatePicker
          selectedDate={date}
          onDateChange={handleDateChange}
          id="selectedDate"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="template">Templates</label>
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
          onClick={() => router.back()}
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
