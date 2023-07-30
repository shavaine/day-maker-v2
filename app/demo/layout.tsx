import SideNav from "@/components/Navigation/SideNav";
import { DemoProvider } from "@/context/DemoContext/DemoProvider";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <SideNav />
      <DemoProvider>
        <main className="w-full bg-gray-100">{children}</main>
      </DemoProvider>
    </div>
  );
}
