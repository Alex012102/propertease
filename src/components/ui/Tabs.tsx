import React from "react";
import { Calendar, Bell, MessageSquare } from "lucide-react";

type TabKey = "notifications" | "messages" | "calendar";

const tabIcons: Record<TabKey, React.ReactElement> = {
  notifications: <Bell size={20} />,
  messages: <MessageSquare size={20} />,
  calendar: <Calendar size={20} />,
};

export interface PortalTypes {
  children?: React.ReactNode;
  activeTab: TabKey;
  setActiveTab: React.Dispatch<React.SetStateAction<TabKey>>;
}

const Tabs: React.FC<PortalTypes> = ({ activeTab, setActiveTab }) => {

  return (
    <div className="flex flex-1 justify-between bg-brand-charcoal-dark px-2 pt-4">
      {(Object.keys(tabIcons) as TabKey[]).map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-ss-lg rounded-se-lg flex items-center gap-2 hover:bg-brand-charcoal-tint transition-all duration-900 ${
            activeTab === tab ? "bg-brand-charcoal-shade font-semibold" : ""
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tabIcons[tab]}
          <span className={`${activeTab === tab ? "" : "hidden"}`}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
