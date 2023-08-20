import BackButton from "@/components/Buttons/BackButton";

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
        <BackButton />
      </div>
      <div className="mx-3 sm:mx-10">{children}</div>
    </div>
  );
}
