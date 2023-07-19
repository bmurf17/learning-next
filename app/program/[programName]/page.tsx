import { ProgramDetails } from "@/components";
import { use } from "react";

async function getProgramByName(programName: string) {
  var query = programName.replace("%20", " ");
  return await prisma?.program.findFirst({
    where: {
      name: query,
    },
  });
}

export default function Page({ params }: { params: { programName: string } }) {
  const program = use(getProgramByName(params.programName));

  return (
    <main className="">
      <ProgramDetails programName={program?.name || ""} />
    </main>
  );
}
