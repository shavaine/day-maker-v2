import BackButton from "@/components/Buttons/BackButton";

export default function ViewTemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="flex flex-row justify-between ">
        <h1 className="pageTitle">View Template</h1>
        <BackButton />
      </div>
      {children}
    </div>
  );
}
