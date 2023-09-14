import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";
import DeleteUserModal from "@/components/Modals/DeleteUserModal";

const Profile = async () => {
  // Redirects to login page if trying to access Dashboard while not signed-in
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <h1 className="pageTitle">Profile</h1>
      <div className="flex flex-col gap-y-10 p-5 sm:p-10 bg-white shadow rounded-md font-spaceMono">
        <div className="flex justify-around flex-wrap gap-y-6">
          <div className="flex flex-col gap-y-2 text-lg">
            <Image
              src={session.user?.image ?? "/assets/avatar.png"}
              width={80}
              height={80}
              alt="Profile Picture"
              className="rounded-full self-center"
            />
            <p className="text-center text-xl text-mainColor font-bold">
              Profile Info
            </p>
            <h2 className="text-2xl">Name: {session.user?.name}</h2>
            <h2 className="text-2xl ">Email: {session.user?.email}</h2>
          </div>
          <div className="flex flex-col gap-y-2 text-lg self-end text-center">
            <h2 className="text-mainColor text-xl font-bold">Settings</h2>
            <DeleteUserModal />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
