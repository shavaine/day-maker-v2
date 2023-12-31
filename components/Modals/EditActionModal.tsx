"use client";
import { useState, FC } from "react";
import EditActionForm from "../Forms/EditActionForm";

interface Props {
  title: string;
  actionId: string;
}
// Imported In ActionCard Component
const EditActionModal: FC<Props> = ({ title, actionId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className="bg-[#C5AFF2] text-mainColor w-1/2 font-workSans font-bold grow hover:opacity-80 p-2"
        onClick={toggleModal}
      >
        Edit
      </button>
      {modalOpen && (
        // Screen Backfrop
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {/* Modal Container */}
          <div className="flex flex-col gap-y-4 bg-white p-5 rounded-2xl mx-2 w-full sm:max-w-[600px]">
            <div className="flex flex-row justify-between ">
              <h1 className="text-2xl sm:text-3xl font-workSans font-bold text-black">
                Edit Action
              </h1>
            </div>
            <EditActionForm
              toggleModal={toggleModal}
              id={actionId}
              title={title}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EditActionModal;
