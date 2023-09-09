"use client";
import { useState, FC } from "react";
import { CreateActionForm } from "../Forms/CreateActionForm";
import { MdFormatListBulletedAdd } from "react-icons/md";

const CreateActionModal: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className="hidden sm:flex hover:font-bold font-spaceMono"
        onClick={toggleModal}
      >
        Create Action
      </button>
      {/* Mobile Only */}
      <MdFormatListBulletedAdd
        onClick={toggleModal}
        className="sm:hidden text-3xl text-mainColor"
      />
      {modalOpen && (
        // Screen Backdrop
        <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {/* Modal Container  */}
          <div className="flex flex-col gap-y-4 bg-white p-5 rounded-2xl mx-2 w-full sm:max-w-[600px]">
            <div className="flex flex-row justify-between">
              <h1 className="text-3xl font-workSans font-bold text-black">
                Create Action
              </h1>
            </div>
            <CreateActionForm toggleModal={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default CreateActionModal;
