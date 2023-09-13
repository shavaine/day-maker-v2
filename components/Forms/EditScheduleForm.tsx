"use client";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Schedule } from "@/context/Interfaces";
import { editScheduleValidate } from "@/lib/Validation/formValidation";
import { showErrorToast, showSuccessToast } from "@/lib/helpers";
import { usePathname } from "next/navigation";
import { FC, FormEvent, useContext, useState } from "react";
import { VscLoading } from "react-icons/vsc";

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
  const [loading, setLoading] = useState(false);
  const [templateID, setTemplateID] = useState<string>(tempID);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const input = editScheduleValidate(tempID, state.templates);

    if (input.notValid) {
      showErrorToast({ message: input.message, dispatch, setLoading });
    } else {
      if (pathname.includes("demo")) {
        const updateSchedule: Schedule = {
          id: currentScheduleId,
          date: currentDate,
          templateId: templateID,
          userId: "1",
        };

        dispatch({ type: "UPDATE_SCHEDULE", payload: updateSchedule });
        toggleModal();
        showSuccessToast({
          message: `Schedule was successfully updated`,
          dispatch,
        });
      }

      if (pathname.includes("dashboard")) {
        setLoading(true);
        const body = {
          id: currentScheduleId,
          date: currentDate,
          templateId: templateID,
        };
        try {
          const res = await fetch("/api/schedules/edit", {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const updateSchedule = await res.json();
          updateSchedule.date = new Date(updateSchedule.date);
          if (res.ok) {
            dispatch({ type: "UPDATE_SCHEDULE", payload: updateSchedule });
            setLoading(false);
            toggleModal();
            showSuccessToast({
              message: `Schedule was successfully updated`,
              dispatch,
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
          Change
          {loading && (
            <VscLoading className="animate-spin self-center ml-1"></VscLoading>
          )}
        </button>
      </div>
    </form>
  );
};
