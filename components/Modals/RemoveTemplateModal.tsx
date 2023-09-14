"use client";
import { useState, useContext, FC } from "react";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { usePathname } from "next/navigation";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { MdDeleteForever } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { showSuccessToast } from "@/lib/helpers";

interface Props {
  currentScheduleId: string;
}

const RemoveTemplateModal: FC<Props> = ({ currentScheduleId }) => {
  const pathname = usePathname();
  const { dispatch } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const deleteSchedule = async (currentScheduleId: string) => {
    if (pathname.includes("demo")) {
      dispatch({ type: "DELETE_SCHEDULE", payload: currentScheduleId });
      showSuccessToast({
        message: `Schedule was successfully deleted`,
        dispatch,
      });
    }

    if (pathname.includes("dashboard")) {
      setLoading(true);
      try {
        const res = await fetch(`/api/schedules/delete/${currentScheduleId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          dispatch({ type: "DELETE_SCHEDULE", payload: currentScheduleId });
          setLoading(false);
          showSuccessToast({
            message: `Schedule was successfully deleted`,
            dispatch,
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
    }
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        className="hover:font-bold font-spaceMono bg-red-200 hover:bg-red-400 rounded-full p-1 px-2"
        onClick={toggleModal}
      >
        <MdDeleteForever className="text-2xl text-red-900" />
      </button>
      {modalOpen && (
        // Screen Backdrop
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          {/* Modal Container  */}
          <div className="flex flex-col gap-y-4 bg-white p-5 rounded-2xl mx-2 w-full sm:max-w-[600px]">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl sm:text-3xl font-workSans font-bold text-black">
                Are You Sure You Want To Remove Template?
              </h1>
            </div>
            <div className="flex flex-row justify-end gap-x-2">
              <button
                onClick={() => deleteSchedule(currentScheduleId)}
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

export default RemoveTemplateModal;
