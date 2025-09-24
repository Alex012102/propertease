import React, { useState, useEffect } from "react";
import { mockCalendarEvents } from "../utils/mocks/mockCalenderEvents";

export interface CalendarEvent {
  id: number;
  title: string;
  location: string;
  date: string;
  time: string;
  description: string;
}

const CalendarPanel: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    setEvents(mockCalendarEvents);

    // Example fetch with typing:
    // fetch("/api/events")
    //   .then((response) => response.json())
    //   .then((data: CalendarEvent[]) => {
    //     setEvents(data);
    //   });
  }, []);

  return (
    <div>
      {events.map((event) => (
        <div
          key={event.id}
          className="hover:bg-brand-charcoal-tint py-3 px-4 border-b border-b-brand-charcoal-light"
        >
          <div className="flex justify-between">
            <strong className="text-sm">{event.title}</strong>
            <p>{event.date}</p>
          </div>
          <div className="flex justify-between">
            <p>{event.location}</p>
            <p>{event.time}</p>
          </div>
          <small>{event.description}</small>
        </div>
      ))}
    </div>
  );
};

export default CalendarPanel;
