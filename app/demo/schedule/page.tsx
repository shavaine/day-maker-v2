import ScheduleCard from "@/components/Cards/ScheduleCard";
import Link from "next/link";

export default function Schedule() {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="flex flex-row justify-between ">
        <h1 className="pageTitle">Schedule</h1>
        <Link href="schedule/create">
          <h4 className="text-lg text-gray-500 self-center hover:font-bold mt-5">
            Create Schedule
          </h4>
        </Link>
      </div>
      <ScheduleCard />
    </div>
  );
}
