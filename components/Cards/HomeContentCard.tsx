import Image from "next/image";

export default function HomeContentCard() {
  return (
    <div className="container py-20 bg-white rounded-lg flex flex-col font-workSans text-center drop-shadow-2xl border">
      <h1 className="font-bold  text-4xl text-purple-950 mb-16">How To Use</h1>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row justify-between">
          <h3 className="self-center text-mainColor text-2xl text-start w-[60%] font-bold">
            1. Create reusable Actions that can be assigned to task
          </h3>
          <Image
            src="/assets/placeholder-wide.png"
            width={416}
            height={174}
            alt="placeholder Image"
            className="w-1/3"
          />
        </div>
        <div className="flex flex-row justify-between">
          <h3 className="self-center text-mainColor text-2xl text-start w-[60%] font-bold">
            2. Create Templates and add Tasks
          </h3>
          <Image
            src="/assets/placeholder-wide.png"
            width={416}
            height={174}
            alt="placeholder Image"
            className="w-1/3"
          />
        </div>
        <div className="flex flex-row justify-between">
          <h3 className="self-center text-mainColor text-2xl text-start w-[60%] font-bold">
            3. Create Schedules by selecting a date and template
          </h3>
          <Image
            src="/assets/placeholder-wide.png"
            width={416}
            height={174}
            alt="placeholder Image"
            className="w-1/3"
          />
        </div>
      </div>
    </div>
  );
}
