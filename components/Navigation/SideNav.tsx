import {
  AiFillSchedule,
  AiOutlineCalendar,
  AiFillLayout,
} from "react-icons/ai";
import { HiListBullet } from "react-icons/hi2";
import SideLink from "./SideLink";
import { FC } from "react";

const SideNav: FC = () => {
  return (
    <aside className="hidden md:flex h-screen border-r py-6 px-5">
      <ul className="flex flex-col gap-y-5 font-spaceMono">
        <li>
          <SideLink path="schedule">
            <AiFillSchedule className="text-3xl ml-3" />
            <p>Schedule</p>
          </SideLink>
        </li>
        <li>
          <SideLink path="calendar">
            <AiOutlineCalendar className="text-3xl ml-3" />
            <p>Calendar</p>
          </SideLink>
        </li>
        <li>
          <SideLink path="templates">
            <AiFillLayout className="text-3xl ml-3" />
            <p>Templates</p>
          </SideLink>
        </li>
        <li>
          <SideLink path="actions">
            <HiListBullet className="text-3xl ml-3" />
            <p>Actions</p>
          </SideLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideNav;
