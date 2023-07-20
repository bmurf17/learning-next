import Link from "next/link";
import Calendar from "./Calendar";

interface Props {
  programName: string;
  programDescription: string;
}

export default function ProgramDetails({
  programName,
  programDescription,
}: Props) {
  return (
    <>
      <div className="xl:pt-auto pt-28 md:mx-28 mx-4">
        <Link href={"/programs"}>
          <h3 className="text-[20px] cursor-pointer">&lt; back</h3>
        </Link>
      </div>
      <div className="flex md:flex-row flex-col gap-5 z-0 max-w-[1440px] xl:mx-auto mx-2">
        <div className="flex-1 xl:pt-auto  sm:px-16 px-6">
          <h1 className="2xl:text-[48px] sm:text-[48px] text-[50px] font-bold text-center">
            {programName}
          </h1>
          <p className="text-[27px] text-black-100 font-light mt-5 text-center">
            {programDescription}
          </p>
        </div>
        <div className="flex-1 xl:pt-auto  sm:px-16 px-6">
          <h1 className="2xl:text-[48px] sm:text-[48px] text-[50px] font-bold text-center">
            Templates
          </h1>
          <div className="text-[27px] text-black-100 font-light mt-5 text-center">
            &lt; Example Template &gt;
          </div>
        </div>
      </div>
      <Calendar />
    </>
  );
}
