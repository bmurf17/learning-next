"use client";
import { useState } from "react";
import { ActivitiesWithSupplies } from "@/lib/prisma";
import SuppliesHover from "./SuppliesHover";
import { Activity } from "@prisma/client";
import AddActivityDialog from "../shared/AddActivityDialog";

interface Props {
  availableActivities: ActivitiesWithSupplies[];
  addToActivities(activity: Activity): void;
}

export default function ActivitiesPanel({
  availableActivities,
  addToActivities,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-slate-300 p-4">
        <div className='"block text-gray-700 text-sm font-bold'>
          Activities{" "}
        </div>
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
            {availableActivities.map((activity) => {
              return (
                <tr key={activity.id} className="bg-white border-b text-center">
                  <td className="p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer text-green-600"
                      onClick={() => {
                        addToActivities(activity);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {activity.name}
                  </td>
                  <td>{activity.minutes}</td>

                  <td>
                    <SuppliesHover supplies={activity.supplies} />
                  </td>
                </tr>
              );
            })}
            <tr className="bg-purple-400  hover:bg-purple-500 ">
              <td
                className="px-6 py-4 align-middle center text-center cursor-pointer text-white whitespace-nowrap"
                colSpan={4}
                onClick={() => {
                  setOpen(true);
                }}
              >
                Add An Activity
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <AddActivityDialog open={open} setOpen={setOpen} />
    </>
  );
}
