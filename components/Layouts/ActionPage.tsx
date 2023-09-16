import ActionList from "../List/ActionList";
import CreateActionModal from "../Modals/CreateActionModal";
import { FC } from "react";

const ActionPage: FC = () => {
  return (
    <div className="max-h-screen overflow-auto">
      <h4 className="sm:hidden fixed bottom-20 right-1 z-50 bg-white rounded-full p-2 border">
        <CreateActionModal />
      </h4>

      <div className="flex flex-row justify-center sm:justify-between ">
        <h1 className="pageTitle">Actions</h1>
        <h4 className="hidden sm:flex text-lg text-gray-500 mt-5">
          <CreateActionModal />
        </h4>
      </div>
      <ActionList />
    </div>
  );
};
export default ActionPage;
