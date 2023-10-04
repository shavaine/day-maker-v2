import BackButton from "../Buttons/BackButton";
import CreateScheduleForm from "../Forms/CreateScheduleForm";
import { FC } from "react";

const ScheduleCreatePage: FC = () => {
  return (
    <>
      <header className="flex flex-row justify-between ">
        <h1 className=" pageTitle">Create Schedule</h1>
        <BackButton />
      </header>
      <CreateScheduleForm />
    </>
  );
};
export default ScheduleCreatePage;
