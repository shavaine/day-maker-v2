"use client";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { Action } from "@/context/Interfaces";
import { usePathname } from "next/navigation";
import { FC, FormEvent, useContext, useState } from "react";

interface Props {
  toggleModal: () => void;
  id: string;
  title: string;
}

export const EditActionForm: FC<Props> = ({ toggleModal, id, title }) => {
  const pathname = usePathname();
  const { dispatch } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const [actionTitle, setActionTitle] = useState<string>(`${title}`);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updateAction: Action = {
      id: id,
      title: actionTitle,
      userId: "1",
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
