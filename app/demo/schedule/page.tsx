import ScheduleCard from "@/components/Cards/ScheduleCard";

export default function Schedule() {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="p-10 flex flex-row justify-between ">
        <h1 className=" text-secondaryColor font-workSans font-bold text-4xl">
          Schedule
        </h1>
        <div className="flex flex-row gap-x-6">
          <h4 className="text-lg text-gray-500">Change Template</h4>
          <h4 className="text-lg text-gray-500">Delete Template</h4>
        </div>
      </div>
      <div className="p-10">
        <ScheduleCard />
      </div>
    </div>
  );
}
