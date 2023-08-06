"use client";
import { useState, useContext, FC } from "react";
import { DemoContext } from "@/context/DemoContext/DemoContext";

interface Props {
  currentScheduleId: string;
}

const RemoveTemplateModal: FC<Props> = ({ currentScheduleId }) => {
  const { state, dispatch } = useContext(DemoContext);
  const [modalOpen, setModalOpen] = useState(false);

  const deleteSchedule = (currentScheduleId: string) => {
    dispatch({ type: "DELETE_SCHEDULE", payload: currentScheduleId });
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div>
      <button className="hover:font-bold font-spaceMono" onClick={toggleModal}>
        Remove Template
      </button>
      {modalOpen && (
        // Screen Backdrop
        <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {/* Modal Container  */}
          <div className="flex flex-col gap-y-4 bg-white p-5 rounded-2xl max-w-[600px]">
            <div className="flex flex-row justify-between">
              <h1 className="text-3xl font-workSans font-bold text-black">
                Are You Sure You Want To Remove Template?
              </h1>
              <button onClick={toggleModal}>X</button>
            </div>
            <div className="flex flex-row justify-end gap-x-2">
              <button
                onClick={() => deleteSchedule(currentScheduleId)}
                className="border w-24 rounded-lg bg-mainColor p-1 text-white hover:font-bold hover:opacity-80"
                type="button"
              >
                Yes
              </button>
              <button
                onClick={toggleModal}
                className="border w-24 rounded-lg p-1 hover:font-bold"
                type="button"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveTemplateModal;
