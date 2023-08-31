import BackButton from "@/components/Buttons/BackButton";
import { CreateScheduleForm } from "@/components/Forms/CreateScheduleForm";

export default function CreateTemplate() {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="flex flex-row justify-between ">
        <h1 className=" pageTitle">Create Schedule</h1>
        <BackButton />
      </div>
      <CreateScheduleForm />
    </div>
  );
}
