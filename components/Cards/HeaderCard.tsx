import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FC } from "react";

const HeaderCard: FC = () => {
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
      <Link
        href="https://github.com/shavaine/day-maker-v2"
        target="_blank"
        className="bg-purple-950 text-white p-2 px-4 rounded-full mx-auto flex flex-row gap-3 hover:opacity-80 hover:font-bold"
      >
        <FaGithub className="text-2xl" />
        Github
      </Link>
    </header>
  );
};

export default HeaderCard;
