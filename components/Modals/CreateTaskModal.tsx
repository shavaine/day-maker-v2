"use client";
import { useState, FC } from "react";
import { CreateTaskForm } from "../Forms/CreateTaskForm";
import { Task } from "@/context/Interfaces";

interface Props {
  addTemplateTasks: (task: Task) => void;
}

const CreateTaskModal: FC<Props> = ({ addTemplateTasks }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        className="hover:font-bold hover:opacity-80 font-spaceMono bg-secondaryColor text-white p-1 px-2 rounded-md"
        onClick={toggleModal}
      >
        + Add Task
      </button>
      {modalOpen && (
        // Screen Backdrop
        <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {/* Modal Container  */}
          <div className="flex flex-col gap-y-4 bg-white p-5 rounded-2xl w-full sm:max-w-[600px] mx-2">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl sm:text-3xl font-workSans font-bold text-black">
                Add Task
              </h1>
            </div>
            <CreateTaskForm
              toggleModal={toggleModal}
              addTemplateTasks={addTemplateTasks}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTaskModal;
