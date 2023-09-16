"use client";
import { ProgramWithProgramPlans } from "@/lib/prisma";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomButton from "../shared/CustomButton";
import Calendar from "./Calendar";

interface Props {
  programName: string;
}

export default function ProgramDetails({ programName }: Props) {
  const router = useRouter();

  const [data, setData] = useState<ProgramWithProgramPlans | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/program/${programName}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [programName]);

  return (
    <>
      {isLoading ? (
        <> Loading</>
      ) : (
        <>
          <div className="xl:pt-auto pt-28 md:mx-28 mx-4">
            <Link href={"/programs"}>
              <h3 className="text-[20px] cursor-pointer">&lt; Back</h3>
            </Link>
          </div>
          <div className="flex md:flex-row flex-col gap-5 z-0 max-w-[1440px] md:mx-28 mx-4">
            <div className="flex-1 xl:pt-auto  sm:px-16 px-6">
              <h1 className="2xl:text-[48px] sm:text-[48px] text-[50px] font-bold text-center">
                {programName}
              </h1>
              <p className="text-[27px] text-black-100 font-light mt-5 text-center">
                {data?.description}
              </p>
            </div>
            <div className="flex-1 xl:pt-auto  sm:px-16 px-6">
              <h1 className="2xl:text-[48px] sm:text-[48px] text-[50px] font-bold text-center">
                Templates
              </h1>
              <div className="text-[27px] text-black-100 font-light mt-5 text-center">
                &lt; Examples &gt;
                <div>
                  {data?.programPlans?.map((plan) => {
                    if (plan.isExample) {
                      <div key={plan.id}>
                        This is where a program plan display will go
                      </div>;
                    }
                    return <div key={plan.id}></div>;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row align-middle justify-center">
            <CustomButton
              title={"Plan A Program"}
              disabled={false}
              containerStyles={
                "bg-purple-400  hover:bg-purple-500 text-white rounded-full my-2 p-4"
              }
              handleClick={() => {
                router.push("/plan");
              }}
            />
          </div>
          {data ? (
            <Calendar
              programPlans={data.programPlans}
              programName={programName}
            />
          ) : (
            <> </>
          )}
        </>
      )}
    </>
  );
}
