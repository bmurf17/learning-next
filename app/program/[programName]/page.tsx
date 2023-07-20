import { ProgramDetails } from "@/components";
import { use } from "react";
import { prisma } from "../../../lib/prisma";

async function getProgramByName(programName: string) {
  var query = programName.replace("%20", " ");
  if (prisma) {
    return await prisma?.program.findFirst({
      where: {
        name: query,
      },
      include: {
        programPlans: true,
      },
    });
  }
  return null;
}

export default function Page({ params }: { params: { programName: string } }) {
  const program = use(getProgramByName(params.programName));
  return (
    <main className="">
      <ProgramDetails
        programName={program?.name || ""}
        programDescription={program?.description || ""}
        programPlans={program?.programPlans || []}
      />
    </main>
  );
}
