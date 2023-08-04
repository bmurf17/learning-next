"use client";

import { ActivitiesWithSupplies } from "@/lib/prisma";
import { Activity, Program } from "@prisma/client";

import CustomTextField from "../CustomTextField";
import ActivitiesPanel from "./ActivitiesPanel";
import ProgramsDropdown from "./ProgramsDropdown";
import SuppliesHover from "./SuppliesHover";

interface Props {
  availableActivities: ActivitiesWithSupplies[];
  programs: Program[];
}

export default function ProgramPlanForm({
  availableActivities,
  programs,
}: Props) {
  async function handleSubmit(event: any) {
    event.preventDefault();

    const data = {
      //program: selected,
      date: String(event.target.date.value),
      totalMinutes: +event.target.totalMinutes.value,
      groupCount: +event.target.groupCount.value,
    };

    const response = await fetch("/api/programPlan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Happy");
    } else {
      console.log("Sad");
    }
  }

  const includedActivities: Activity[] = [
    {
      id: 0,
      description: "",
      minutes: 15,
      name: "kick ball",
    },
    {
      id: 1,
      description: "",
      minutes: 15,
      name: "slime making",
    },
  ];

  return (
    <div className="flex md:flex-row gap-5 z-0 max-w-[1440px] xl:mx-auto mx-2">
      <div className="flex-1 xl:pt-auto pt-28 sm:px-16 px-6">
        <div className="flex  md:flex-row flex-col gap-4">
          <div className="md:w-1/2 w-full bg-slate-300 p-4">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="flex flex-col gap-4">
                <div className="fixed top-16 w-72"></div>
                <ProgramsDropdown programs={programs} />
                <CustomTextField
                  fieldName={"Date"}
                  fieldId={"date"}
                  type="date"
                />
                <CustomTextField
                  fieldName={"Total Minutes"}
                  fieldId={"totalMinutes"}
                  type="number"
                />
                <CustomTextField
                  fieldName={"Group Count"}
                  fieldId={"groupCount"}
                  type="number"
                />
                <label className="block text-gray-700 text-sm font-bold -mb-2">
                  Activities
                </label>

                <table className="w-full  text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Minutes</th>
                      <th>Supplies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {includedActivities.map((activity) => {
                      return (
                        <tr
                          key={activity.id}
                          className="bg-white border-b text-center"
                        >
                          <td className="p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 text-red-500  hover:cursor-pointer"
                            >
                              <path d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" />
                            </svg>
                          </td>
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {activity.name}
                          </td>
                          <td>{activity.minutes}</td>
                          <td className="text-sky-400">
                            <SuppliesHover supplies={[]} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <button
                className="bg-purple-400  hover:bg-purple-500 text-white rounded-full mt-4 p-2"
                type="submit"
              >
                Submit Program
              </button>
            </form>
          </div>
          <div className="md:w-1/2 w-full">
            <ActivitiesPanel availableActivities={availableActivities} />
          </div>
        </div>
      </div>
    </div>
  );
}
