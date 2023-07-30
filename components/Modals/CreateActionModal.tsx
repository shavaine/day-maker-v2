"use client";
import { useState, FC } from "react";
import { CreateActionForm } from "../Forms/CreateActionForm";

const CreateActionModal: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div>
      <button className="hover:font-bold" onClick={toggleModal}>
        Create Action
      </button>
      {modalOpen && (
        // Screen Backdrop
        <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {/* Modal Container  */}
          <div className="flex flex-col gap-y-4 bg-white p-5 rounded-2xl max-w-[600px]">
            <div className="flex flex-row justify-between">
              <h1 className="text-3xl font-bold text-black">Create Action</h1>
              <button onClick={toggleModal}>X</button>
            </div>
            <CreateActionForm toggleModal={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateActionModal;
