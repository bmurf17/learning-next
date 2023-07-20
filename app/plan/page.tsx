"use client";
export default function Page() {
  async function handleSubmit(event: any) {
    event.preventDefault();

    const data = {
      name: String(event.target.name.value),
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
    <main>
      <div className="flex md:flex-row flex-col gap-5 z-0 max-w-[1440px] xl:mx-auto mx-2">
        <div className="flex-1 xl:pt-auto pt-28 sm:px-16 px-6">
          <h1>Submit our contact form</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name">Name </label>
              <input type="text" id="name" />
            </div>

            <button
              className="bg-purple-400  hover:bg-purple-500 text-white rounded-full my-10 p-8"
              type="submit"
            >
              Submit Program
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
