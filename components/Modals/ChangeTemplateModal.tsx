"use client";
import { useState, FC } from "react";
import { EditScheduleForm } from "../Forms/EditScheduleForm";
import { FaEdit } from "react-icons/fa";

interface Props {
  currentScheduleId: string;
  currentDate: Date;
  tempID: string;
}

const ChangeTemplateModal: FC<Props> = ({
  currentScheduleId,
  currentDate,
  tempID,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        className="hover:font-bold font-spaceMono bg-yellow-200 hover:bg-yellow-400 rounded-full p-1 px-2"
        onClick={toggleModal}
      >
        <FaEdit className="text-2xl text-yellow-900" />
      </button>
      {modalOpen && (
        // Screen Backdrop
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {/* Modal Container  */}
          <div className="flex flex-col gap-y-4 bg-white p-5 rounded-2xl mx-2 w-full sm:max-w-[600px]">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl sm:text-3xl font-workSans font-bold text-black">
                Change Template
              </h1>
            </div>
            <EditScheduleForm
              toggleModal={toggleModal}
              currentScheduleId={currentScheduleId}
              currentDate={currentDate}
              tempID={tempID}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeTemplateModal;
