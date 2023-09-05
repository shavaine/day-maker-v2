"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Schedule } from "@/context/Interfaces";
import { generateCUID } from "@/lib/generateCUID";
import { usePathname, useRouter } from "next/navigation";
import { FC, FormEvent, useContext, useState } from "react";
import DatePicker from "../DatePicker";
import { formatDateToString, formatStringToDate } from "@/lib/helpers";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";

export const CreateScheduleForm: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { state, dispatch } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(formatDateToString(new Date(Date.now())));
  const [templateID, setTemplateID] = useState<string>(state.templates[0].id);

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pathname.includes("demo")) {
      const newSchedule: Schedule = {
        id: generateCUID(),
        date: formatStringToDate(date),
        templateId: templateID,
        userId: "1234",
      };
      dispatch({ type: "ADD_SCHEDULE", payload: newSchedule });
      router.back();
    }

    if (pathname.includes("dashboard")) {
      e.preventDefault();
      setLoading(true);
      const body = {
        date: formatStringToDate(date),
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
        setLoading(false);
        router.back();
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
            <option key={template.id} value={template.id}>
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
          disabled={loading}
        >
          Create
        </button>
      </div>
    </form>
  );
};
