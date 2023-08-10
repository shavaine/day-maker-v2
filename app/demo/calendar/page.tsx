import Calendar from "@/components/Calendar";

export default function CalendarPage() {
  return (
    <div>
      <h1 className="p-10 flex flex-row text-secondaryColor font-workSans font-bold text-4xl">
        Calendar
      </h1>
      <Calendar />
    </div>
  );
}
