"use client";
import useScrollStore from "@/store/useScrollStore";
import { ScrollType } from "@/types/scroll";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const ScrollTypeSelector = () => {
  const scrollTypes: ScrollType[] = [10, 30, 60];
  const { scrollType, setScrollType } = useScrollStore();
  return (
    <div className="flex justify-center gap-6 p-2 w-full">
      {scrollTypes.map((type) => {
        return (
          <div className="hover-target" key={type}>
            <div
              onClick={() => setScrollType(type)}
              className={cn(
                "p-2 bg-slate-200 rounded",
                scrollType === type && "bg-purple-400"
              )}
            >
              <Image
                className="size-16"
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
