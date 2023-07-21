import { ActivitiesWithSupplies } from "@/lib/prisma";
import { Activity } from "@prisma/client";

interface Props {
  availableActivities: ActivitiesWithSupplies[];
}

export default async function ActivitiesPanel({ availableActivities }: Props) {
  return (
    <div className="flex flex-col bg-slate-300 p-4">
      <table className="w-full  text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th>Name</th>
            <th>Minutes</th>
            <th>Supplies</th>
          </tr>
        </thead>
        <tbody>
          {availableActivities.map((activity) => {
            return (
              <tr key={activity.id} className="bg-white border-b text-center">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {activity.name}
                </td>
                <td>{activity.minutes}</td>
                <td>supplies</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
