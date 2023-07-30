import ActionList from "@/components/List/ActionList";
import CreateActionModal from "@/components/Modals/CreateActionModal";

export default function Actions() {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="container p-0 py-10 flex flex-row justify-between ">
        <h1 className=" text-secondaryColor font-bold text-4xl">Actions</h1>
        <h4 className="text-lg text-gray-500">
          <CreateActionModal />
        </h4>
      </div>
      <ActionList />
    </div>
  );
}
