import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, Bell } from "lucide-react";

import Sidebar from "./Sidebar";
import NotificationsBar from "./NotificationsBar";

const Portal: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] =
    useState<boolean>(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top bar with toggle buttons */}
        <div className="flex justify-between md:justify-end items-center p-4 bg-white shadow-md xl:hidden z-10">
          <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <button onClick={() => setIsNotificationsOpen(true)}>
            <Bell size={24} />
          </button>
        </div>

        {/* Actual page content */}
        <div className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </div>
      </div>

      {/* Notifications Bar */}
      <NotificationsBar
        isOpen={isNotificationsOpen}
        setIsOpen={setIsNotificationsOpen}
      />
    </div>
  );
};

export default Portal;
