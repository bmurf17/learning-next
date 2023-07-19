import CustomCard from "./CustomCard";
import Link from "next/link";
import { Program as ProgramType } from "@/models/program";

interface Props {
  programs: ProgramType[];
}

export default function Program({ programs }: Props) {
  return (
    <div className="flex md:flex-row flex-col gap-5 z-0 max-w-[1440px] xl:mx-auto mx-2 md:h-screen ">
      <div className="flex-1 xl:pt-auto pt-14 sm:px-16 px-6">
        <p className="text-[27px] text-black-100 font-light mt-5 md:text-center">
          Take a look at one of our programs
        </p>
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link className="col-span-1 flex flex-col" href={"/program/sunday"}>
            <CustomCard
              image={"/test-image1.jpg"}
              title={"Sunday Circle"}
              description={"A Program where we hang on a sunday"}
            />
          </Link>
          {programs.map((program) => {
            return (
              <Link
                className="col-span-1 flex flex-col"
                key={program.name + program.id}
                href={`/program/${program.name}`}
              >
                <CustomCard
                  image={program.image}
                  title={program.name}
                  description={program.description}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
