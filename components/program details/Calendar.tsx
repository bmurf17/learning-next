"use client";
import { ProgramPlan } from "@prisma/client";
import { useRouter } from "next/navigation";
import { CalendarEvent, Schedulely } from "schedulely";
import "schedulely/dist/index.css";

interface Props {
  programPlans: ProgramPlan[];
  programName: string;
}

export default function Calendar({ programPlans, programName }: Props) {
  const router = useRouter();

  const programs: CalendarEvent[] = programPlans.map((plan) => {
    return {
      color: "#a855f7",
      end: plan.date.toISOString(),
      id: plan.id + "",
      start: plan.date.toISOString(),
      summary: programName,
    };
  });

  return (
    <div className="flex flex-row align-middle justify-center mt-2 md:mx-28 m-4">
      <Schedulely
        events={programs}
        additionalClassNames={["w-full"]}
        actions={{
          onEventClick: (event) => router.push(`/programPlan/${event.id}`),
          //onMoreEventsClick: (events) => router.push("/"),
        }}
      />
    </div>
  );
}
