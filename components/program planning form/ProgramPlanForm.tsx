"use client";

import { Activity } from "@prisma/client";
import CustomTextField from "../CustomTextField";
import ActivitiesPanel from "./ActivitiesPanel";
import { ActivitiesWithSupplies } from "@/lib/prisma";
import { useEffect, useState } from "react";

interface Props {
  availableActivities: ActivitiesWithSupplies[];
}

export default function ProgramPlanForm({ availableActivities }: Props) {
  const [programs, setPrograms] = useState([]);

  async function getPrograms() {
    const res = await fetch("/api/program", {
      method: "GET",
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    setPrograms(await res.json());
  }

  useEffect(() => {
    getPrograms();
  }, []);

  async function handleSubmit(event: any) {
    event.preventDefault();

    const data = {
      programName: String(event.target.programName.value),
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
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <CustomTextField
                  fieldName={"Program Name"}
                  fieldId={"programName"}
                  type={"text"}
                />
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
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {activity.name}
                          </td>
                          <td>{activity.minutes}</td>
                          <td className="text-sky-400">supplies</td>
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
