import ScheduleCard from "@/components/Cards/ScheduleCard";

export default function Schedule() {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="p-3 sm:p-10 flex flex-row justify-between ">
        <h1 className=" text-secondaryColor font-workSans font-bold text-4xl">
          Schedule
        </h1>
        <h4 className="text-lg text-gray-500">Create Schedule</h4>
      </div>
      <div className="px-3 sm:px-10">
        <ScheduleCard />
      </div>
    </div>
  );
}
