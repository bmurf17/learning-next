"use client";
import { useRouter } from "next/navigation";
import { CalendarEvent, Schedulely } from "schedulely";
import "schedulely/dist/index.css";

export default function Calendar() {
  const router = useRouter();
  const storyEvents: CalendarEvent[] = [
    {
      color: "#a855f7",
      end: "2023-07-19T16:07:22.292Z",
      id: "f147",
      start: "2023-07-19T16:07:22.292Z",
      summary: "Cool Hat",
    },
  ];

  return (
    <div className="flex flex-row align-middle justify-center mt-14 md:m-28 m-4">
      <Schedulely
        dark={localStorage.getItem("theme") === "dark"}
        events={storyEvents}
        additionalClassNames={["w-full"]}
        actions={{
          onEventClick: (event) => router.push("/"),
          onMoreEventsClick: (events) => router.push("/"),
        }}
      />
    </div>
  );
}
