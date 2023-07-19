import Image from "next/image";
import CustomButton from "./CustomButtton";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex md:flex-row flex-col gap-5 z-0 max-w-[1440px] xl:mx-auto mx-2">
      <div className="flex-1 xl:pt-auto pt-28 sm:px-16 px-6">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Plan, Manage, and Program Upcoming events!
        </h1>

        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline the process of planning events
        </p>

        <Link href={"/programs"}>
          <CustomButton
            title="Explore Programs"
            containerStyles="bg-purple-400  hover:bg-purple-500 text-white rounded-full my-10 p-8"
            disabled={false}
          />
        </Link>
      </div>
      <div className="xl:flex-[1.5] flex items-center justify-center w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-[70%] h-[590px] z-0">
          <Image
            src="/friendship-circle.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
