import { Program as ProgramComponent } from "@/components";
import { use } from "react";
import { prisma } from "../../lib/prisma";

async function getPrograms() {
  return await prisma?.program.findMany();
}

export default function Program() {
  const allPrograms = use(getPrograms());

  return (
    <main className="">
      <ProgramComponent programs={allPrograms} />
    </main>
  );
}
