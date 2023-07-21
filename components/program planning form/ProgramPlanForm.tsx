"use client";

import CustomTextField from "../CustomTextField";

export default function ProgramPlanForm() {
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
  return (
    <div className="flex md:flex-row gap-5 z-0 max-w-[1440px] xl:mx-auto mx-2">
      <div className="flex-1 flex-row xl:pt-auto pt-28 sm:px-16 px-6">
        <div className="flex">
          <div className="w-1/2 bg-slate-300 p-4">
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
              </div>

              <button
                className="bg-purple-400  hover:bg-purple-500 text-white rounded-full mt-4 p-2"
                type="submit"
              >
                Submit Program
              </button>
            </form>
          </div>
          <div className="w-1/2 p-4">This is where the examples will be</div>
        </div>
      </div>
    </div>
  );
}
