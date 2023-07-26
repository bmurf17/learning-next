import { ProgramPlanWithActivities } from "@/lib/prisma";

interface Props {
  programName: string;
  programDate: Date | undefined;
  groupCount: number;
}

export default function ProgramPlan({
  groupCount,
  programName,
  programDate,
}: Props) {
  return (
    <div className="flex md:flex-row flex-col gap-5 z-0 max-w-[1440px] xl:mx-auto mx-2">
      <div className="flex-1 xl:pt-auto pt-28 sm:px-16 px-6">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          {programName}
        </h1>
        <h2 className="2xl:text-[42px] sm:text-[34px] text-[20px] font-light">
          {programDate?.toDateString()}
        </h2>
      </div>
    </div>
  );
}
