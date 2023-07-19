import { ProgramDetails } from "@/components";

export default function Page({ params }: { params: { programName: string } }) {
  return (
    <main className="">
      <ProgramDetails programName={params.programName} />
    </main>
  );
}
