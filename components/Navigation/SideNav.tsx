import {
  AiFillSchedule,
  AiOutlineCalendar,
  AiFillLayout,
} from "react-icons/ai";
import { HiListBullet } from "react-icons/hi2";
import SideLink from "./SideLink";

export default function SideNav() {
  return (
    <div className="hidden sm:flex w-60 h-screen border-r py-6 px-3">
      <ul className="flex flex-col gap-y-5 font-spaceMono">
        <li>
          <SideLink path="/demo/schedule">
            <AiFillSchedule className="text-2xl ml-3" />
            <p>Schedule</p>
          </SideLink>
        </li>
        <li>
          <SideLink path="/demo/calendar">
            <AiOutlineCalendar className="text-2xl ml-3" />
            <p>Calendar</p>
          </SideLink>
        </li>
        <li>
          <SideLink path="/demo/templates">
            <AiFillLayout className="text-2xl ml-3" />
            <p>Templates</p>
          </SideLink>
        </li>
        <li>
          <SideLink path="/demo/actions">
            <HiListBullet className="text-2xl ml-3" />
            <p>Actions</p>
          </SideLink>
        </li>
      </ul>
    </div>
  );
}
