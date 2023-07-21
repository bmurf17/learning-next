import { Activity } from "@prisma/client";

interface Props {
  availableActivities: Activity[];
}

export default async function ActivitiesPanel({ availableActivities }: Props) {
  return (
    <div className="flex flex-col bg-slate-300 p-4">
      <div>
        {availableActivities.map((activity) => {
          console.log(activity);
          return <div key={activity.id}>{activity.name}</div>;
        })}
      </div>
      <div>Add to current program</div>
    </div>
  );
}
