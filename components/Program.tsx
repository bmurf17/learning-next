import Image from "next/image";
import CustomCard from "./CustomCard";

export default function Program() {
  return (
    <div className="flex md:flex-row flex-col gap-5 z-0 max-w-[1440px] xl:mx-auto mx-2 md:h-screen">
      <div className="flex-1 xl:pt-36 pt-14 sm:px-16 px-6">
        <p className="text-[27px] text-black-100 font-light mt-5 md:text-center">
          Take a look at one of our programs
        </p>
        <div className="flex md:flex-row flex-col pt-6 gap-5 flex-wrap">
          <CustomCard
            image={"/test-image1.jpg"}
            title={"Sunday Circle"}
            description={"A Program where we hang on a sunday"}
          />
        </div>
      </div>
    </div>
  );
}
