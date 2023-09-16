"use client";
import { useState, useContext } from "react";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { VscLoading } from "react-icons/vsc";
import { signOut } from "next-auth/react";
import { FC } from "react";

const DeleteUserModal: FC = () => {
  const { dispatch } = useContext(DashboardContext);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const deleteAccount = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/user/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        setLoading(false);
        signOut();
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            message: `Account Successfully Deleted`,
            type: "success",
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "SHOW_TOAST",
        payload: {
          message: `Something went wrong, please try again later`,
          type: "error",
        },
      });
    }
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="border bg-red-300 h-10 px-6 py-2 rounded-md font-spaceMono text-red-600 hover:opacity-80 hover:font-bold"
      >
        Delete Account
      </button>
      {modalOpen && (
        // Screen Backdrop
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {/* Modal Container  */}
          <div className="flex flex-col gap-y-4 bg-white p-5 rounded-2xl mx-2 w-full sm:max-w-[600px]">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl sm:text-3xl font-workSans font-bold text-black">
                Are You Sure You Want To Delete your account?
              </h1>
            </div>
            <div className="flex flex-row justify-end gap-x-2">
              <button
                onClick={() => deleteAccount()}
                className="flex justify-center border w-24 rounded-lg bg-mainColor p-1 text-white hover:font-bold hover:opacity-80"
                type="button"
                disabled={loading}
              >
                Yes
                {loading && (
                  <VscLoading className="animate-spin self-center ml-1"></VscLoading>
                )}
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

export default DeleteUserModal;
