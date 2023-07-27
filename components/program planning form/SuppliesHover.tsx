"use client";
import { Popover } from "@headlessui/react";
import { Supply } from "@prisma/client";

interface Props {
  supplies: Supply[];
}

export default function SuppliesHover({ supplies }: Props) {
  return (
    <div>
      <Popover>
        <Popover.Button>
          <p className="text-blue-400">supplies</p>
        </Popover.Button>
        <Popover.Panel className="absolute z-10 -translate-x-1/2">
          <div className=" bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-8">
            <div className="">
              {supplies.map((supply) => {
                return <div key={supply.id}>{supply.name}</div>;
              })}
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}
