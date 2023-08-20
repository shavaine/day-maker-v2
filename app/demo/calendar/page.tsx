import Calendar from "@/components/Calendar";

export default function CalendarPage() {
  return (
    <div>
      <h1 className="px-3 sm:px-10 my-3 sm:my-12 flex flex-row text-secondaryColor font-workSans font-bold text-4xl">
        Calendar
      </h1>
      <Calendar />
    </div>
  );
}
