import React, { useState, useEffect } from "react";
import { mockMessages } from "../utils/mocks/mockMessages";

interface Message {
  id: number;
  sender: string;
  subject: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  avatar?: string;
}

const MessagesPanel: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages(mockMessages);

    // Code for when using API
    // fetch(URLhere)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setEvents(data);
    //   });
  }, []);

  return (
    <div>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="hover:bg-brand-charcoal-tint py-3 px-4 border-b border-b-brand-charcoal-light"
        >
          <div className="flex mb-2 space-x-3 items-center">
            <img
              src={msg.avatar}
              alt="n/A"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <strong
                className={`${
                  msg.isRead ? "text-sm" : "text-brand-primary text-sm"
                } `}
              >
                {msg.sender}
              </strong>
              <p className="text-xs">{msg.timestamp}</p>
            </div>
          </div>
          <small className="line-clamp-2">{msg.message}</small>
        </div>
      ))}
    </div>
  );
};

export default MessagesPanel;
