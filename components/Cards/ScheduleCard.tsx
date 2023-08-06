"use client";

import { DemoContext } from "@/context/DemoContext/DemoContext";
import { formatCustomDate, getTemplateNameById } from "@/lib/helpers";
import { useContext, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TemplateTable from "../Tables/TemplateTable";

const ScheduleCard = () => {
  const [scheduleDate, setScheduleDate] = useState(new Date(Date.now()));
  const { state, dispatch } = useContext(DemoContext);

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
    <div className="flex flex-col gap-y-20 bg-white p-4 rounded-md border shadow">
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
        {shownSchedule?.templateId && (
          <h2 className="text-2xl text-secondaryColor font-workSans font-bold">
            {getTemplateNameById(shownSchedule?.templateId, state.templates)}
          </h2>
        )}
        <TemplateTable tempId={shownSchedule?.templateId} />
      </div>
    </div>
  );
};
export default ScheduleCard;
