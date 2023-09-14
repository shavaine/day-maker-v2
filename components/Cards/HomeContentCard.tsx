import Image from "next/image";

export default function HomeContentCard() {
  return (
    <div className="container py-20 bg-white rounded-lg flex flex-col font-workSans text-center drop-shadow-2xl border">
      <h1 className="font-bold text-2xl  md:text-5xl text-purple-950 mb-16">
        How To Use
      </h1>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col md:flex-row justify-between">
          <h3 className="self-center text-purple-700 text-lg md:text-2xl text-start w-full md:w-[60%] font-bold">
            1. Create reusable Actions that can be assigned to task
          </h3>
          <Image
            src="/assets/Step-one.png"
            width={1920}
            height={1080}
            alt="Step One"
            className="w-full md:w-1/3"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <h3 className="self-center text-purple-700 text-lg md:text-2xl text-start w-full md:w-[60%] font-bold">
            2. Create Templates and add tasks using your reusable actions
          </h3>
          <Image
            src="/assets/Step-two.png"
            width={1920}
            height={1080}
            alt="Step Two"
            className="w-full md:w-1/3"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <h3 className="self-center text-purple-700 text-lg md:text-2xl text-start w-full md:w-[60%] font-bold">
            3. Create Schedules by selecting a date and adding a template
          </h3>
          <Image
            src="/assets/Step-three.png"
            width={1920}
            height={1080}
            alt="Step Three"
            className="w-full md:w-1/3"
          />
        </div>
      </div>
    </div>
  );
}
