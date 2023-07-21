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

export default function Page() {
  const allActivities = use(getActivities());
  return (
    <main>
      <ProgramPlanForm availableActivities={allActivities} />
    </main>
  );
}
