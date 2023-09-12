"use client";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Action } from "@/context/Interfaces";
import { actionClientValidate } from "@/lib/Validation/formValidation";
import { generateCUID } from "@/lib/generateCUID";
import { showErrorToast } from "@/lib/helpers";
import { usePathname } from "next/navigation";
import { FC, FormEvent, useContext, useState } from "react";
import { VscLoading } from "react-icons/vsc";

interface Props {
  toggleModal: () => void;
}

export const CreateActionForm: FC<Props> = ({ toggleModal }) => {
  const pathname = usePathname();
  const { state, dispatch } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Form Validation
    const formData = new FormData(e.currentTarget);
    const actionTitle = formData.get("title")?.toString();
    const form = actionClientValidate(actionTitle, state.actions);

    if (form.notValid) {
      showErrorToast({ message: form.message, dispatch, setLoading });
    } else {
      if (pathname.includes("demo")) {
        const newAction: Action = {
          id: generateCUID(),
          title: actionTitle!,
          userId: "1234",
        };

        dispatch({ type: "ADD_ACTION", payload: newAction });
        toggleModal();
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Action ${newAction.title} was successfully created`,
            type: "success",
          },
        });
      }

      if (pathname.includes("dashboard")) {
        setLoading(true);
        const body = {
          title: actionTitle!,
        };
        try {
          const res = await fetch("/api/actions/create", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (res.ok) {
            const newAction = await res.json();
            dispatch({ type: "ADD_ACTION", payload: newAction });
            dispatch({
              type: "SHOW_TOAST",
              payload: {
                message: `Action ${newAction.title} was successfully created`,
                type: "success",
              },
            });
            toggleModal();
            setLoading(false);
          } else if (res.status === 400) {
            const errorData = await res.json();
            const message: string = errorData.error;
            console.log("HTTP 400 Error Data:", errorData);
            showErrorToast({ message: message, dispatch, setLoading });
          }
          // Will mostly handle network errors
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
        <label className="text-black text-sm" htmlFor="CreateAction">
          Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          id="CreateAction"
          className="border rounded-lg px-3 py-2 w-full"
          autoFocus
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
