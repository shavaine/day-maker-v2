import ScheduleCard from "@/components/Cards/ScheduleCard";
import Link from "next/link";
import { TbCalendarPlus } from "react-icons/tb";

export default function Schedule() {
  return (
    <div className="max-h-screen overflow-auto">
      <Link
        className="self-center sm:hidden fixed bottom-20 right-1 z-50 bg-white rounded-full p-2 border"
        href="schedule/create"
      >
        <TbCalendarPlus className="sm:hidden text-3xl text-mainColor" />
      </Link>
      <div className="flex flex-row justify-between ">
        <h1 className="pageTitle">Schedule</h1>
        <Link className="hidden sm:inline" href={`schedule/create`}>
          <h4 className="text-lg text-gray-500 self-center hover:font-bold mt-5">
            Create Schedule
          </h4>
        </Link>
      </div>
      <ScheduleCard />
    </div>
  );
}
