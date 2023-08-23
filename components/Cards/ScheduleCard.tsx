"use client";

import { DemoContext } from "@/context/DemoContext/DemoContext";
import { formatCustomDate, getTemplateNameById } from "@/lib/helpers";
import { useContext, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TemplateTable from "../Tables/TemplateTable";
import ChangeTemplateModal from "../Modals/ChangeTemplateModal";
import RemoveTemplateModal from "../Modals/RemoveTemplateModal";
import AddTemplateModal from "../Modals/AddTemplateModal";

const ScheduleCard = () => {
  const [scheduleDate, setScheduleDate] = useState(new Date(Date.now()));
  const { state } = useContext(DemoContext);

  const shownSchedule = state.schedules.find(
    (schedule) =>
      formatCustomDate(schedule.date) === formatCustomDate(scheduleDate)
  );

  const handleAddDay = () => {
    const newDate = new Date(scheduleDate);
    newDate.setDate(scheduleDate.getDate() + 1);
    setScheduleDate(newDate);
  };

  const handleSubtractDay = () => {
    const newDate = new Date(scheduleDate);
    newDate.setDate(scheduleDate.getDate() - 1);
    setScheduleDate(newDate);
  };

  return (
    <div className="flex flex-col gap-y-20 bg-white p-3 lg:p-10 rounded-md border shadow">
      <div className="flex flex-row justify-between">
        <FaArrowLeft
          className="text-2xl self-center hover:opacity-80 hover:cursor-pointer"
          onClick={handleSubtractDay}
        />
        <h1 className=" text-secondaryColor font-workSans font-bold text-4xl text-center">
          {formatCustomDate(scheduleDate) ==
          formatCustomDate(new Date(Date.now()))
            ? "Today"
            : formatCustomDate(scheduleDate)}
        </h1>
        <FaArrowRight
          className="text-2xl self-center hover:opacity-80 hover:cursor-pointer"
          onClick={handleAddDay}
        />
      </div>
      <div className="flex flex-col">
        <>
          {shownSchedule?.templateId ? (
            <div className="flex flex-col sm:flex-row justify-between">
              <h2 className="text-2xl text-secondaryColor font-workSans font-bold">
                {getTemplateNameById(
                  shownSchedule?.templateId,
                  state.templates
                )}
              </h2>
              <div className="flex flex-row justify-between sm:gap-x-6">
                <ChangeTemplateModal
                  currentScheduleId={shownSchedule?.scheduleId}
                  currentDate={shownSchedule?.date}
                  tempID={shownSchedule?.templateId}
                />
                <RemoveTemplateModal
                  currentScheduleId={shownSchedule?.scheduleId}
                />
              </div>
            </div>
          ) : (
            <AddTemplateModal scheduleDate={scheduleDate} />
          )}
        </>
        {/* Table */}
        {shownSchedule?.templateId && (
          <TemplateTable tempId={shownSchedule?.templateId} />
        )}
      </div>
    </div>
  );
};
export default ScheduleCard;
