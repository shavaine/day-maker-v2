"use client";
import { useState, FC } from "react";
import AddScheduleForm from "../Forms/AddScheduleForm";

interface Props {
  scheduleDate: Date;
}

const AddTemplateModal: FC<Props> = ({ scheduleDate }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="order-last flex flex-col justify-center">
      <p className="text-center p-4 font-spaceMono text-xl">
        No Existing Template...
      </p>
      <button
        className="bg-mainColor rounded-md hover:bg-secondaryColor text-white p-2 my-4"
        onClick={toggleModal}
      >
        Add Template
      </button>
      {modalOpen && (
        // Screen Backdrop
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {/* Modal Container  */}
          <div className="flex flex-col gap-y-4 bg-white p-5 rounded-2xl mx-2 w-full sm:max-w-[600px]">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl sm:text-3xl font-workSans font-bold text-black">
                Add Template
              </h1>
            </div>
            <AddScheduleForm
              toggleModal={toggleModal}
              scheduleDate={scheduleDate}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTemplateModal;
