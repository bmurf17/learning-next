interface Props {
  programName: string;
}

export default function ProgramDetails({ programName }: Props) {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-5 z-0 max-w-[1440px] xl:mx-auto mx-2">
        <div className="flex-1 xl:pt-36 pt-28 sm:px-16 px-6">
          <h1 className="2xl:text-[48px] sm:text-[48px] text-[50px] font-bold text-center">
            {programName}
          </h1>

          <p className="text-[27px] text-black-100 font-light mt-5 text-center">
            Description of Program
          </p>
        </div>
        <div className="flex-1 xl:pt-36 pt-28 sm:px-16 px-6">
          <h1 className="2xl:text-[48px] sm:text-[48px] text-[50px] font-bold text-center">
            Template Programs
          </h1>
          <div className="text-[27px] text-black-100 font-light mt-5 text-center">
            &lt; Example Template &gt;
          </div>
        </div>
      </div>
      <div className="flex flex-row align-middle justify-center mt-14">
        Calendar
      </div>
    </>
  );
}
