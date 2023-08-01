export default function ViewTemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-h-screen overflow-auto">
      <div className="p-10 flex flex-row justify-between ">
        <h1 className=" text-secondaryColor font-workSans font-bold text-4xl">
          View Template
        </h1>
      </div>
      <div className="p-10">{children}</div>
    </div>
  );
}
