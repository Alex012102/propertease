import { useState, useEffect } from "react";
import { mockNotifications } from "../utils/mocks/mockNotifications";
import {
  Banknote,
  // BanknoteArrowDown,
  Hammer,
  ScanSearch,
} from "lucide-react";

// Define all valid notification types
type NotificationType = "receivable" | "maintenance" | "inspection";

// Notification object interface
interface Notification {
  id: number;
  title: string;
  type: NotificationType;
  message: string;
  timestamp: string;
  isRead: boolean;
}

// Strongly type notificationIcons
const notificationIcons: Record<NotificationType, React.ReactElement> = {
  receivable: <Banknote size={28} />,
  // payable: <BanknoteArrowDown />,
  maintenance: <Hammer size={28} />,
  inspection: <ScanSearch size={28} />,
};

const NotificationsPanel: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setNotifications(mockNotifications as Notification[]);
    // cast if mockNotifications is untyped,
    // or better: type it at its source in `mockNotifications.ts`
  }, []);

  return (
    <div>
      {notifications.map((item) => (
        <div
          key={item.id}
          className="hover:bg-brand-charcoal-tint py-3 px-4 border-b border-b-brand-charcoal-light"
        >
          <div className="flex mb-2 space-x-3 items-center">
            {notificationIcons[item.type]}
            <div className="flex flex-col">
              <strong
                className={`${
                  item.isRead ? "text-sm" : "text-brand-primary text-sm"
                }`}
              >
                {item.title}
              </strong>
              <p className="text-xs">{item.timestamp}</p>
            </div>
          </div>
          <small className="line-clamp-2">{item.message}</small>
        </div>
      ))}
    </div>
  );
};

export default NotificationsPanel;
