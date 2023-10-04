"use client";
import { DashboardContext } from "@/context/DashboardContext/DashboardContext";
import { DemoContext } from "@/context/DemoContext/DemoContext";
import { getCalendarData, getTemplateNameById } from "@/lib/helpers";
import { usePathname } from "next/navigation";
import { FC, useContext, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Calendar: FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const pathname = usePathname();
  const { state } = useContext(
    pathname.includes("dashboard") ? DashboardContext : DemoContext
  );

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
      return (
        <p className="font-bold ">
          <span className="bg-purple-200 rounded-md p-0.5">
            {date.getDate()}
          </span>
        </p>
      );
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
        <p className="font-bold text-xs overflow-auto sm:text-base w-[90%] sm:mx-auto">
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
    <article className="flex flex-col gap-y-20 bg-white sm:p-4 py-10 rounded-md border shadow">
      <header className="flex flex-row justify-between">
        <FaAngleLeft
          className="hover:opacity-60 hover:cursor-pointer text-3xl lg:ml-32"
          onClick={handlePrevMonth}
        />
        <h2 className="font-bold font-workSans text-3xl">
          {" "}
          {currentMonth.toLocaleString("default", {
            month: "short",
            year: "numeric",
          })}
        </h2>
        <FaAngleRight
          className="hover:opacity-60 hover:cursor-pointer text-3xl lg:mr-32"
          onClick={handleNextMonth}
        />
      </header>
      <section className="grid grid-cols-7 grid-flow-row lg:mx-16 text-center">
        <p className="font-spaceMono text-mainColor font-bold pb-14">Sun</p>
        <p className="font-spaceMono text-mainColor font-bold pb-14">Mon</p>
        <p className="font-spaceMono text-mainColor font-bold pb-14">Tue</p>
        <p className="font-spaceMono text-mainColor font-bold pb-14">Wed</p>
        <p className="font-spaceMono text-mainColor font-bold pb-14">Thu</p>
        <p className="font-spaceMono text-mainColor font-bold pb-14">Fri</p>
        <p className="font-spaceMono text-mainColor font-bold pb-14">Sat</p>
        {calendarData.map((date, index) => (
          <div className="pb-14 flex flex-col" key={index}>
            {applyDate(date)}
            {applySchedule(date)}
          </div>
        ))}
      </section>
    </article>
  );
};
export default Calendar;
