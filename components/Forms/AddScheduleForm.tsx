"use client";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Schedule } from "@/context/Interfaces";
import { scheduleValidate } from "@/lib/Validation/formValidation";
import { generateCUID } from "@/lib/generateCUID";
import { showErrorToast } from "@/lib/helpers";
import { usePathname } from "next/navigation";
import { FC, FormEvent, useContext, useState } from "react";
import { VscLoading } from "react-icons/vsc";

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
    setLoading(true);

    const input = scheduleValidate(
      scheduleDate,
      templateID,
      state.schedules,
      state.templates
    );

    if (input.notValid) {
      showErrorToast({ message: input.message, dispatch, setLoading });
    } else {
      if (pathname.includes("demo")) {
        const newSchedule: Schedule = {
          id: generateCUID(),
          date: scheduleDate,
          templateId: templateID,
          userId: "1234",
        };
        dispatch({ type: "ADD_SCHEDULE", payload: newSchedule });
        setLoading(false);
        toggleModal();
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Schedule was successfully created`,
            type: "success",
          },
        });
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
            setLoading(false);
            toggleModal();
            dispatch({
              type: "SHOW_TOAST",
              payload: {
                message: `Schedule was successfully created`,
                type: "success",
              },
            });
          } else if (res.status === 400) {
            const errorData = await res.json();
            const message: string = errorData.error;
            console.log("HTTP 400 Error Data:", errorData);
            showErrorToast({ message: message, dispatch, setLoading });
          }
        } catch (error) {
          toggleModal();
          console.error("Something went wrong", error);
          dispatch({
            type: "SHOW_TOAST",
            payload: {
              message: `Something went wrong, please try again later`,
              type: "error",
            },
          });
        }
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
