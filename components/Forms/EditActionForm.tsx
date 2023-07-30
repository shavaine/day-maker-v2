"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Action } from "@/context/Interfaces";
import { FormEvent, useContext, useState } from "react";

interface Props {
  toggleModal: () => void;
  actionId: string;
  title: string;
}

export const EditActionForm = ({ toggleModal, actionId, title }: Props) => {
  const { dispatch } = useContext(DemoContext);
  const [actionTitle, setActionTitle] = useState<string>(`${title}`);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updateAction: Action = {
      actionId: actionId,
      title: actionTitle,
    };

    if (actionTitle.trim() !== "") {
      dispatch({ type: "UPDATE_ACTION", payload: updateAction });
      toggleModal();
    }
  };

  return (
    <form
      className="flex flex-col gap-y-14 font-spaceMono"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label className="text-black text-sm" htmlFor="EditActionForm">
          Title
        </label>
        <input
          type="text"
          value={actionTitle}
          onChange={(e) => setActionTitle(e.target.value)}
          id="EditActionForm"
          className="border rounded-lg px-3 py-2 w-96"
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
          Change
        </button>
      </div>
    </form>
  );
};
