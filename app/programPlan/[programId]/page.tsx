import ProgramPlan from "@/components/program plan page/ProgramPlan";
import { use } from "react";
import { prisma } from "../../../lib/prisma";

async function getProgramPlanById(programId: string) {
  if (prisma) {
    return await prisma?.programPlan.findFirst({
      where: {
        id: +programId,
      },
      include: {
        program: true,
        activities: true,
      },
    });
  }
}

export default function Page({ params }: { params: { programId: string } }) {
  const programPlan = use(getProgramPlanById(params.programId));
  console.log("Here");
  return (
    <main className="">
      <ProgramPlan
        groupCount={programPlan?.groupCount || 0}
        programName={programPlan?.program.name || ""}
        programDate={programPlan?.date}
        activities={programPlan?.activities || undefined}
      />
    </main>
  );
}
