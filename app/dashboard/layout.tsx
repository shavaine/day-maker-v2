import SideNav from "@/components/Navigation/SideNav";
import DashboardProvider from "@/context/DashboardContext/DashboardProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}
export default async function DemoLayout({ children }: Props) {
  // Redirects to login page if trying to access Dashboard while not signed-in
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex flex-row">
      <SideNav />
      <DashboardProvider>
        <main className="w-full bg-gray-100 p-3 sm:p-10">{children}</main>
      </DashboardProvider>
    </div>
  );
}
