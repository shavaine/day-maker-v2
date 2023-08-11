"use client";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { getCalendarData, getTemplateNameById } from "@/lib/helpers";
import { FC, ReactNode, useContext, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Calendar: FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { state, dispatch } = useContext(DemoContext);

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const applyDate = (date: Date | null) => {
    // Applies Style If Day Is Today
    if (
      date?.getMonth() === new Date(Date.now()).getMonth() &&
      date?.getDate() === new Date(Date.now()).getDate()
    ) {
      return <p className="font-bold bg-purple-200">{date.getDate()}</p>;
    }

    if (date) {
      return <p>{date.getDate()}</p>;
    } else {
      return "";
    }
  };

  const applySchedule = (date: Date | null) => {
    let schedule = state.schedules.find(
      (schedule) =>
        schedule.date.getMonth() === date?.getMonth() &&
        schedule.date.getDate() === date?.getDate()
    );

    if (schedule) {
      return (
        <p className="font-bold">
          {getTemplateNameById(schedule.templateId, state.templates)}
        </p>
      );
    }
  };

  const calendarData = getCalendarData(
    currentMonth.getFullYear(),
    currentMonth.getMonth()
  );

  return (
    <div className="p-10">
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="font-bold font-workSans text-2xl">
            {" "}
            {currentMonth.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <div className="flex flex-row gap-x-3 text-2xl ">
            <FaAngleLeft
              className="hover:opacity-60 hover:cursor-pointer"
              onClick={handlePrevMonth}
            />
            <FaAngleRight
              className="hover:opacity-60 hover:cursor-pointer"
              onClick={handleNextMonth}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 grid-flow-row">
          {calendarData.map((date, index) => (
            <div className="border pb-14 flex flex-col" key={index}>
              {applyDate(date)}
              {applySchedule(date)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Calendar;
