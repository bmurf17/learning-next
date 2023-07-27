import { ProgramPlanWithActivities } from "@/lib/prisma";
import { Activity } from "@prisma/client";
import ProgramPlanActivity from "./ProgramPlanActivity";
import CustomButton from "../CustomButton";

interface Props {
  programName: string;
  programDate: Date | undefined;
  groupCount: number;
  activities: Activity[] | undefined;
}

export default function ProgramPlan({
  groupCount,
  programName,
  programDate,
  activities,
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
        <div className="bg-slate-300 p-4 shadow-lg ">
          <h3 className="text-lg font-medium text-center m-1"> Activities</h3>
          {activities?.map((activity) => {
            return (
              <ProgramPlanActivity key={activity.id} activity={activity} />
            );
          })}
        </div>
        <div>
          <CustomButton
            containerStyles="bg-purple-400  hover:bg-purple-500 text-white rounded-full mt-4 p-4"
            title={"Print Out Schedules"}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}
