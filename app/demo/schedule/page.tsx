import ScheduleCard from "@/components/Cards/ScheduleCard";

export default function Schedule() {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="flex flex-row justify-between ">
        <h1 className="pageTitle">Schedule</h1>
        <h4 className="text-lg text-gray-500 self-center">Create Schedule</h4>
      </div>
      <ScheduleCard />
    </div>
  );
}
