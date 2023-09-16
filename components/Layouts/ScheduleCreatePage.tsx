import BackButton from "../Buttons/BackButton";
import CreateScheduleForm from "../Forms/CreateScheduleForm";
import { FC } from "react";

const ScheduleCreatePage: FC = () => {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="flex flex-row justify-between ">
        <h1 className=" pageTitle">Create Schedule</h1>
        <BackButton />
      </div>
      <CreateScheduleForm />
    </div>
  );
};
export default ScheduleCreatePage;
