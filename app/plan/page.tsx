import ProgramPlanForm from "@/components/program planning form/ProgramPlanForm";
import { prisma } from "../../lib/prisma";
import { use } from "react";

async function getActivities() {
  return await prisma?.activity.findMany({
    include: {
      supplies: true,
    },
  });
}

async function getPrograms() {
  return await prisma?.program.findMany();
}

export default function Page() {
  const allActivities = use(getActivities());
  const programs = use(getPrograms());
  return (
    <main className="mb-2">
      <ProgramPlanForm
        availableActivities={allActivities}
        programs={programs}
      />
    </main>
  );
}
