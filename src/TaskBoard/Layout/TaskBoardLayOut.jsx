import { FaBookmark, FaList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { RiProfileFill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const TaskBoardLayOut = () => {
  return (
    <div className="bg-[#F1F5F9]">
      <Helmet>
        <title>TaskNinja | TaskBoard</title>
      </Helmet>
      <div className="py-12 bg-primary">
        {/* <DashBoardHeader></DashBoardHeader> */}
      </div>
      <div className="flex max-w-[90rem] mx-auto gap-14">
        <div className="w-80 min-h-screen bg-white">
          <ul className="menu p-5 text-xl gap-5">
            <li>
              <NavLink to="/dashboard/profile">
                <RiProfileFill />
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/appointments">
                <FaBookmark />
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/testResults">
                <FaList />
                Test Results
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex w-full flex-col min-h-screen pt-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default TaskBoardLayOut;
