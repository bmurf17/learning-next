"use client";

import { ActivitiesWithSupplies } from "@/lib/prisma";
import SuppliesHover from "./SuppliesHover";

interface Props {
  availableActivities: ActivitiesWithSupplies[];
}

export default async function ActivitiesPanel({ availableActivities }: Props) {
  return (
    <div className="flex flex-col bg-slate-300 p-4">
      <div className='"block text-gray-700 text-sm font-bold'>Activities</div>
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
        </tbody>
      </table>
    </div>
  );
}
