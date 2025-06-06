import { ScrollType } from "@/types/scroll";
import Image from "next/image";
import React from "react";

const ScrollTypeSelector = () => {
  const scrollTypes: ScrollType[] = [10, 30, 60];

  return (
    <div className="flex gap-2 p-2 w-full md:w-1/2 ">
      {scrollTypes.map((type) => {
        return (
          <div key={type}>
            <div className="cursor-pointer p-2 bg-slate-200 border border-purple-400 rounded">
              <Image
                src={`/images/scroll-${type}.png`}
                alt={`scroll-${type}`}
                width={50}
                height={50}
              ></Image>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollTypeSelector;
