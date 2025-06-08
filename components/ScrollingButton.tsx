"use client";

import React from "react";
import { Button } from "./ui/button";
import useScrollStore from "@/store/useScrollStore";

const ScrollingButton = () => {
  const { scrolling, history } = useScrollStore();
  return (
    <Button onClick={scrolling} className="hover-target " variant={"outline"}>
      衝卷{" "}
      {history.length > 0 && (
        <span className="text-xs text-gray-500 ml-2">
          {history.length} 次 
        </span>
      )}
    </Button>
  );
};

export default ScrollingButton;
