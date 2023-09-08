import { FaGithub } from "react-icons/fa";

export default function HeaderCard() {
  return (
    <header className="container py-20 bg-white rounded-lg flex flex-col gap-y-3 text-center font-spaceMono shadow-xl">
      <p className="font-bold uppercase text-xl text-[#171A1FFF]">
        Welcome to Daymaker: Unleash your productivity potential!
      </p>
      <h1 className="text-xl lg:text-5xl text-mainColor">
        Scheduling Made Simple
      </h1>
      <p className="text-sm text-[#6F7787FF]">
        Effortlessly organize your schedule, supercharge your <br />{" "}
        productivity, and reclaim control of your day.
      </p>
      <button className="bg-purple-950 text-white p-2 px-4 rounded-full mx-auto flex flex-row gap-3">
        <FaGithub className="text-2xl" />
        Github
      </button>
    </header>
  );
}
