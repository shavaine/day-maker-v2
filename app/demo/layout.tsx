import SideNav from "@/components/Navigation/SideNav";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <SideNav />
      <main className="w-full bg-gray-100">{children}</main>
    </div>
  );
}
