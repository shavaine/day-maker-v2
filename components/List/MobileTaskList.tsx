import { Action, Task } from "@/context/Interfaces";
import MobileTaskCard from "../Cards/MobileTaskCard";
import { FC } from "react";

interface Props {
  tempId: string;
  tasks: Task[];
  actions: Action[];
}

const MobileTaskList: FC<Props> = ({ tempId, tasks, actions }) => {
  return (
    <section className="flex flex-col gap-y-3 md:hidden">
      {tempId &&
        tasks
          .filter((task) => task.templateId === tempId)
          .sort((a, b) => a.startTime - b.startTime)
          .map((task, index) => (
            <MobileTaskCard key={task.id} task={task} actions={actions} />
          ))}
    </section>
  );
};
export default MobileTaskList;
