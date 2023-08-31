import SideNav from "@/components/Navigation/SideNav";
import { DashboardProvider } from "@/context/DashboardContext/DashboardProvider";
import { InitialData } from "@/context/DashboardContext/DashboardInitialData";

export default async function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = await InitialData();
  return (
    <div className="flex flex-row">
      <SideNav />
      <DashboardProvider initialState={initialState}>
        <main className="w-full bg-gray-100 p-3 sm:p-10">{children}</main>
      </DashboardProvider>
    </div>
  );
}
